import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="shadow-md p-2 flex items-center justify-between">
        {/* Common for mobile and desktop */}
        <h1 className="text-lg md:text-2xl font-semibold md:font-bold">
          Truthly
        </h1>

        {/* Hamburger */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {!open ? (
            <Bars3Icon className="w-8 h-8" />
          ) : (
            <XMarkIcon className="w-8 h-8" />
          )}
        </div>

        {/* desktop menu */}
        <div className="hidden md:flex p-2 text-md md:text-xl hover:bg-black hover:text-white transition-colors duration-500 ease-in-out rounded-md md:rounded-lg shadow-sm md:shadow-md border">
          <button>Feed</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden pt-2 shadow-md">
          <div className="p-2 text-md hover:bg-black hover:text-white transition-colors duration-500 ease-in-out rounded-md shadow-sm text-center">
            <button>Feed</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
