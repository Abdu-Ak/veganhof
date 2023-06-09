import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsopen] = useState(false);

  return (
    <>
      <nav class="fixed z-40 w-full bg-white border border-gray-400 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" class="flex items-center">
            <img
              src="/images/veganhof-logo/Veganhof-logo.png"
              class="h-16 mr-3"
              alt="veganHof Logo"
            />
          </a>
          <div class="flex md:order-2">
            <button
              onClick={() => {
                setIsopen(!isOpen);
              }}
              type="button"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100  focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50     dark:placeholder-gray-400 dark:text-gray-500 "
                placeholder="Search..."
              />
            </div>
            <button
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              onClick={() => {
                setIsopen(!isOpen);
              }}
            >
              <span class="sr-only">Open menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="#7cc68d"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "flex-col" : "hidden"
            }`}
            id="navbar-search"
          >
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50     dark:placeholder-gray-400 dark:text-gray-500 "
                placeholder="Search..."
              />
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ">
              <li>
                <a
                  href="/"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded md:bg-transparent md:text-[#7cc68d] md:hover:text-[#ace8b9] md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded md:bg-transparent md:text-[#7cc68d] md:hover:text-[#ace8b9] md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded md:bg-transparent md:text-[#7cc68d] md:hover:text-[#ace8b9] md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
