import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp } from "react-icons/fa";

const EthereumCard = () => {
  const [ethData, setEthData] = useState([]);
  const [rewardRate, setRewardRate] = useState(8.75); // Example reward rate

  useEffect(() => {
    fetchEthereumData();
  }, []);

  const fetchEthereumData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365"
      );
      const formattedData = response.data.prices.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price,
      }));
      setEthData(formattedData);
    } catch (error) {
      console.error("Error fetching Ethereum data:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 mb-3 rounded-2xl shadow-lg w-[30rem] h-[20rem] sm:w-52 cursor-pointer">
      {/* Ethereum Header */}
      <div className="flex items-center space-x-2">
        <img
          src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
          alt="ETH Logo"
          className="w-6 h-6"
        />
        <div>
          <h2 className="text-lg font-bold">Ethereum (ETH)</h2>
          <p className="text-xs text-gray-400">Proof of Stake</p>
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

      {/* Ethereum Graph */}
      <div className="mt-4">
        <ResponsiveContainer width="100%" height={100}>
          <LineChart data={ethData}>
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#627EEA" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EthereumCard;
