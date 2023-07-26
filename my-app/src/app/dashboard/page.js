"use client";

import React from "react";

const page = () => {
  return (
    <div>
      <div className="bg-green-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">Your Logo</div>
          <button className="lg:hidden text-white">
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
      <div class="min-h-screen md:hidden flex">
        <nav class="bg-green-500 w-60 py-4 px-2 space-y-4">
          <a href="#" class="block text-white font-bold text-xl">
            Your Logo
          </a>
          <a href="#" class="block text-white">
            Home
          </a>
          <a href="#" class="block text-white">
            About
          </a>
          <a href="#" class="block text-white">
            Services
          </a>
          <a href="#" class="block text-white">
            Contact
          </a>
        </nav>

        <main class="flex-1 p-4"></main>
      </div>
    </div>
  );
};

export default page;
