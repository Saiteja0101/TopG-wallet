import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp, FaClock } from "react-icons/fa";
import DropdownButton from "../DropDown";

const BitcoinCard = () => {
  const [btcData, setBtcData] = useState([]);
  const [rewardRate, setRewardRate] = useState('84,65,101.23');

  useEffect(() => {
    fetchBitcoinData();
  }, []);

  const fetchBitcoinData = async () => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365"
      );
      const formattedData = response.data.prices.map(([timestamp, price]) => ({
        date: new Date(timestamp).toLocaleDateString(),
        price,
      }));
      setBtcData(formattedData);
    } catch (error) {
      console.error("Error fetching Bitcoin data:", error);
    }
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-2xl shadow-lg w-[30rem] h-[30rem] sm:w-[55rem] cursor-pointer">
      {/* Bitcoin Header */}
      <div className="flex">
        <p className="text-gray-400">Last update - 1 days ago</p>
        <FaClock className="m-[6px] text-gray-300"/>
      </div>
      <div className="flex items-center space-x-2 justify-between">
        <div className="flex gap-2">
          <h2 className="text-lg font-bold">Bitcoin (BTC)</h2>
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt="BTC Logo"
          className="w-6 h-6 mt-1"
        />
        </div>
        <div className="flex gap-5">
                    <DropdownButton />
                </div>
      </div>

      {/* Reward Rate */}
      <div className="mt-3">
        <div className="flex items-center space-x-1">
          <h2 className="text-2xl font-bold">₹{rewardRate}%</h2>
          <span className="text-green-500 flex items-center text-sm">
            <FaArrowUp className="mr-1" /> +1,21,982.11 (‎+1.44%)
          </span>
        </div>
      </div>

      {/* Bitcoin Graph */}
      <div className="mt-4 relative">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={btcData}>
            <XAxis dataKey="year" hide/>
            <YAxis hide />
            <Tooltip />
            <Line type="monotype" dataKey="price" stroke="#00C49F" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BitcoinCard;
