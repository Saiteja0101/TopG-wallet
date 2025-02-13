import Navbar from "./Navbar";
import Home from "./Home";
import { BiSolidBell, BiSearch } from "react-icons/bi";

const Header = () => {
    return (
        <div className="flex">
            <Navbar />
            <div className="flex-1 p-4">
                {/* Top Navigation Bar */}
                <div className="flex justify-center sm:justify-end gap-4">
                    {/* Search Bar */}
                    <div className="hidden sm:flex bg-slate-950 rounded-lg border-b border-slate-700 p-2">
                        <input
                            type="search"
                            placeholder="Search"
                            className="bg-slate-950 text-white px-2 outline-none"
                        />
                        <BiSearch className="h-5 w-5 ml-2 mt-[2px] cursor-pointer" />
                    </div>

                    {/* Notification Icon */}
                    <div className="bg-slate-950 h-9 w-9 rounded-full border border-slate-700 flex items-center justify-center">
                        <BiSolidBell className="h-5 w-5" />
                    </div>

                    {/* Profile Picture */}
                    <img src="https://picsum.photos/200" alt="Profile" className="h-9 w-9 rounded-full border border-slate-700" />
                </div>
                {/* Page Content */}
                <div className="m-5">
                    <Home />
                </div>
            </div>
        </div>
    );
};

export default Header;
