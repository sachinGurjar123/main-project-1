import React from "react";
import TemporaryDrawer from "./drawer";
import SimpleSearchBar from "./searchInput";

const Topbar = () => {
  const [draweerOpen, setDraweerOpen] = React.useState(false);
  return (
    <>
      <TemporaryDrawer
        draweerOpen={draweerOpen}
        setDraweerOpen={setDraweerOpen}
      />
      <div className="bg-green-500 p-4 ">
        <div className="container mx-auto flex justify-between  items-center">
          <div className="text-white font-bold text-lg hidden lg:flex">
            Your Logo
          </div>
          <button
            onClick={() => {
              setDraweerOpen(true);
            }}
            className="lg:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <SimpleSearchBar />

          <div className="hidden lg:flex space-x-4">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              About
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
