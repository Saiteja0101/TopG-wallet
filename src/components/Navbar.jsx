import { useState } from "react";
import { Menu, X } from "lucide-react";
import Wallet from "./Wallet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Logo */}
      <img 
        src="/src/assets/topG.png" // Moved to public directory
        alt="TopG Wallet Logo" 
        className="md:hidden h-9 w-9 rounded-full m-4"
      />

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden p-3 absolute top-3 left-12 z-50 rounded-md transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <X size={20} className="relative left-[7rem]" />
        ) : (
          <Menu size={20} />
        )}
      </button>

      {/* Navigation Sidebar */}
      <nav
        className={`fixed top-0 left-0 min-h-screen sm:min-h-screen w-[210px] p-5 border-r border-slate-700 bg-slate-900 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:relative md:translate-x-0`}
      >
        <div className="flex gap-2 text-xl font-serif pb-5 border-b border-slate-700">
          <img 
            src="/src/assets/topG.png" 
            alt="TopG Wallet Logo" 
            className="h-7 w-7 rounded-full"
          />
          <h1>TopG Wallet</h1>
        </div>
        
        <ul className="mt-5 flex flex-col gap-2">
          {['Dashboard', 'Portfolio', 'Asset', 'Wallet', 'Transaction', 'Data API', 'Staking Calculator']
            .map((item) => (
              <li key={item}>
                <button 
                  className="w-full px-4 py-2 text-left rounded hover:bg-slate-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;