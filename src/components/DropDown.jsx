import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const DropdownButton = () => {
    const [isDay, setIsDay] = useState(false);
    const [isMonth, setIsMonth] = useState(false);
    const [isYear, setIsYear] = useState(false);

    return (
        <>
            <div className="relative inline-block">
                <button
                    className="bg-slate-950 text-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-700"
                    onClick={() => {
                        setIsDay(!isDay)
                    }}
                    
                >
                    24H <ChevronDown size={18} />
                </button>

                {isDay && (
                    <ul className="dropDown-style absolute left-0 mt-2 w-[74px] text-center bg-slate-950 shadow-md rounded-md border border-slate-700 h-44 overflow-y-auto scrollbar-hide">
                        <li>12H</li>
                        <li>6H</li>
                        <li>3H</li>
                        <li>1H</li>
                        <li>30M</li>
                        <li>15M</li>
                        <li>5M</li>
                        <li>M</li>
                    </ul>
                )}
            </div>
            <div className="relative inline-block">
                <button
                    className="bg-slate-950 text-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-700"
                    onClick={() => setIsMonth(!isMonth)}
                >
                    Jan <ChevronDown size={18} />
                </button>

                {isMonth && (
                    <ul className="dropDown-style absolute left-0 mt-2 w-[74px] text-center bg-slate-950 shadow-md rounded-md border border-slate-700 h-44 overflow-y-auto scrollbar-hide">
                        <li>Jan</li>
                        <li>Feb</li>
                        <li>Mar</li>
                        <li>Apr</li>
                        <li>May</li>
                        <li>Jun</li>
                        <li>Jul</li>
                        <li>Aug</li>
                        <li>Sep</li>
                        <li>Oct</li>
                        <li>Nov</li>
                        <li>Dec</li>
                    </ul>
                )}
            </div>
            <div className="relative inline-block">
                <button
                    className="bg-slate-950 text-gray-400 px-3 py-2 rounded-lg flex items-center gap-2 border border-slate-700"
                    onClick={() => setIsYear(!isYear)}
                >
                    2025 <ChevronDown size={18} />
                </button>

                {isYear && (
                    <ul className="dropDown-style absolute left-0 mt-2 w-[84px] text-center bg-slate-950 shadow-md rounded-md border border-slate-700 h-44 overflow-y-auto scrollbar-hide">
                        <li>2024</li>
                        <li>2023</li>
                        <li>2022</li>
                        <li>2021</li>
                        <li>2020</li>
                        <li>2019</li>
                        <li>2018</li>
                        <li>2017</li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default DropdownButton;
