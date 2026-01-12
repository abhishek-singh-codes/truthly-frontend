import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-2 shadow-md sticky top-0 bg-white z-10">
        {/* Common for mobile and desktop */}
        <h1 className="text-lg font-semibold md:text-2xl md:font-bold">
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
        {/* <div className="hidden p-2 transition-colors duration-500 ease-in-out border rounded-md shadow-sm md:flex text-md md:text-xl hover:bg-black hover:text-white md:rounded-lg md:shadow-md">
          <button>Feed</button>
        </div> */}
      </div>

      {/* {open && (
        <div className="pt-2 shadow-md md:hidden">
          <div className="p-2 text-center transition-colors duration-500 ease-in-out rounded-md shadow-sm text-md hover:bg-black hover:text-white">
            <button>Feed</button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
