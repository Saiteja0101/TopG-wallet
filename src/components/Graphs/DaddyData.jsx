import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa";

const DaddyCoinCard = () => {
  const [daddyData, setDaddyData] = useState([]);
  const [rewardRate, setRewardRate] = useState(10.85);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDaddyCoinData();
  }, []);

  const fetchDaddyCoinData = async () => {
    try {
      const tokenAddress = 'DGzqtFfPU6YV6BoTde7y9bZ7U1V6jyFQqXw4h4cHUBq7';
      const response = await axios.get(
        `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`
      );
      
      // Handle API response structure correctly
      const pairs = response.data?.pairs || [];
      if (pairs.length > 0) {
        const priceHistory = pairs[0]?.priceHistory?.map(item => ({
          date: new Date(item.timestamp).toLocaleDateString(),
          price: item.value
        })) || [];
        
        setDaddyData(priceHistory);
        // Update reward rate dynamically if available
        if (pairs[0]?.priceUsd) {
          setRewardRate(parseFloat(pairs[0].priceUsd).toFixed(2));
        }
      }
    } catch (error) {
      console.error("Error fetching DaddyCoin data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg w-[56rem]">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg w-[56rem]">
      {/* Header */}
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/DaddyCoin-logo.png" // Use public path or URL
          alt="DADDY Logo"
          className="w-6 h-6"
          onError={(e) => {
            e.target.style.display = 'none'; // Hide broken images
          }}
        />
        <div>
          <h2 className="text-lg font-bold">Daddy Tate</h2>
          <p className="text-xs text-gray-400">Meme Cryptocurrency</p>
        </div>
      </div>

      {/* Reward Rate */}
      <div className="mt-3">
        <p className="text-gray-400 text-sm">Reward Rate</p>
        <div className="flex items-center space-x-1">
          <h2 className="text-2xl font-bold">{rewardRate}%</h2>
          <span className="text-green-500 flex items-center text-sm">
            <FaArrowUp className="mr-1" /> +{rewardRate}%
          </span>
        </div>
      </div>

      {/* Graph */}
      <div className="mt-4 h-[100px]">
        {daddyData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={daddyData}>
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                interval="preserveEnd"
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                labelStyle={{ color: '#FFF' }}
              />
              <Line 
                type="monotone" 
                dataKey="price" 
                stroke="#FFD700" 
                strokeWidth={2} 
                dot={false}
                animationDuration={300}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-gray-500 text-center py-4">
            No data available
          </div>
        )}
      </div>
    </div>
  );
};

export default DaddyCoinCard;