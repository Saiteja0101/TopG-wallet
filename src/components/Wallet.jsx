import { ChevronDown } from "lucide-react"

const Wallet = () => {
    return (
        <>
            <div className="w-72 bg-slate-900 rounded-xl flex-1 cursor-pointer">
                <div className="flex justify-between m-4">
                    <div className="flex gap-2">
                        <img src="https://picsum.photos/200" alt="Profile" className="h-9 w-9 rounded-full border border-slate-700" />
                        <h1 className="text-xl">Saiteja</h1>
                    </div>
                    <ChevronDown />
                </div>
                <div className="flex items-center space-x-1 m-4">
                    <h2 className="text-2xl font-bold">₹3,73,21,000</h2>
                    <span className="text-green-500 flex items-center text-sm">
                        <p className="mr-1" />(‎+1.44%)
                    </span>
                </div>
                <div className="flex justify-between m-4">
                    <h1>Exchange</h1>
                    <h1>1Btc = ₹84,85,298.98</h1>
                </div>
                <div className="bg-slate-950 m-4 p-3 rounded-xl border border-slate-600">
                    <span className="flex justify-between p-2 pb-3">
                        <p>You sell</p>
                        <span className="flex gap-1">
                            <img
                                src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
                                alt="btc-logo"
                                className="w-5 h-5 mt-1" />
                            BTC
                            <ChevronDown />
                        </span>
                    </span>
                    <span className="flex justify-between p-2">
                        <p>You Get</p>
                        <span className="flex gap-1">
                            <img
                                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                                alt="ETH Logo"
                                className="w-5 h-5 mt-1"
                            />
                            ETH
                            <ChevronDown />
                        </span>
                    </span>
                </div>
                <div className="flex justify-center">
                    <button className="text-center bg-blue-400 text-black font-semibold rounded-md px-10 py-2 mx-4 mb-3 hover:text-white">Exchange Now</button>
                </div>
            </div>
        </>
    )
}

export default Wallet