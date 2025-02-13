import DropdownButton from "./DropDown";
import BitcoinData from "./Graphs/BitcoinData";
import EthereumData from "./Graphs/EthereumData";
import BNBData from "./Graphs/BNBData";
import CardanoData from "./Graphs/CardanoData";
import Algorand from "./Graphs/Algorand";
import Wallet from "./Wallet";

const Home = () => {
    const marketData = [
        { symbol: "BTC", price: "₹82,23,230", change: "+1.44", color: "text-green-600", img: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
        { symbol: "BNB", price: "₹3,945", change: "-1.34", color: "text-red-600", img: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png" },
        { symbol: "ALGO", price: "₹58,025", change: "+2.30", color: "text-green-600", img: "https://cryptologos.cc/logos/algorand-algo-logo.png" },
        { symbol: "ETH", price: "₹2,27,025", change: "-0.34", color: "text-red-600", img: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
        { symbol: "ADA", price: "₹68.62", change: "-2.34", color: "text-red-600", img: "https://cryptologos.cc/logos/cardano-ada-logo.png" },
        { symbol: "TOPG", price: "₹5.21", change: "+1.04", color: "text-green-600", img: "/src/assets/DaddyCoin-logo.png" },
    ];
    return (
        <>
            <div className="flex justify-between w-[56rem]">
                <div className="justify-start">
                    <h1 className='text-lg font-semibold'>Good Morning, Saiteja</h1>
                    <p className='text-gray-500'>Recommended coins for 24 hours</p>
                </div>
                <div className=" hidden sm:flex gap-5">
                    <DropdownButton />
                </div>
            </div>
            <div className="sm:flex flex-1">
                <div className="flex-nowrap gap-4 m-5 justify-center sm:flex">
                    <BNBData />
                    <Algorand />
                    <EthereumData />
                    <CardanoData />
                </div>
                <div className="flex m-4 h-fit w-[30rem] sm:w-[20rem]">
                <Wallet />
                </div>
            </div>
            <div className='m-5 flex-row justify-start gap-5 sm:flex'>
                <BitcoinData />
                <div className="bg-slate-900 w-[30rem] h-[30rem] rounded-xl sm:w-[20rem]">
                    <div className="flex justify-between m-4">
                        <h1 className="m-4 font-semibold">Market</h1>
                        <div className="flex justify-end gap-3 m-3">
                            {['All', 'Meta', 'Gaming'].map((category, index) => (
                                <button key={index} className="bg-slate-950 px-3 py-1 rounded-md text-sm hover:bg-blue-400 hover:text-black">{category}</button>
                            ))}
                        </div>
                    </div>
                    <div className="bg-slate-950 m-4 p-3 rounded-xl border border-slate-600">
                        {marketData.map((coin, index) => (
                            <span key={index} className="flex justify-between p-2 pb-3 gap-4 mb-4 cursor-pointer">
                                <span className="flex gap-1">
                                    <img src={coin.img} alt={`${coin.symbol}-logo`} className="w-5 h-5 mt-1" />
                                    {coin.symbol}
                                </span>
                                <h1>{coin.price}</h1>
                                <h1 className={coin.color}>{coin.change}</h1>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
