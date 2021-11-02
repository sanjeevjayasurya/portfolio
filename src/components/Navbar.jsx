import { useState } from "react";

export const Navbar = () => {
  const [hidden, setHidden] = useState(true);

  const toggleMobileHeader = () => {
    setHidden((v) => !v);
  };
  return (
    <nav className="py-2 md:py-4 font-noto font-bold bg-white dark:bg-gray-800 fixed w-full items-center">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <a className="flex-shrink-0" href="/">
            <svg
              width="36"
              height="36"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-current text-gray-900	 dark:text-white"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M128 32C74.9807 32 32 74.9807 32 128V384C32 437.019 74.9807 480 128 480H384C437.019 480 480 437.019 480 384V128C480 74.9807 437.019 32 384 32H128ZM224 108C177.608 108 140 145.608 140 192C140 238.392 177.608 276 224 276H288C312.301 276 332 295.699 332 320C332 344.301 312.301 364 288 364H168C156.954 364 148 372.954 148 384C148 395.046 156.954 404 168 404H288C334.392 404 372 366.392 372 320C372 273.608 334.392 236 288 236H224C199.699 236 180 216.301 180 192C180 167.699 199.699 148 224 148H344C355.046 148 364 139.046 364 128C364 116.954 355.046 108 344 108H224Z"
              />
            </svg>
          </a>
          <button
            onClick={toggleMobileHeader}
            className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
          >
            <svg
              fill="currentColor"
              className="h-4 w-4"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>

        <div
          className={`${
            hidden ? "hidden" : "flex"
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
          id="navbar-collapse"
        >
          <a
            href="#about"
            className="p-2 lg:px-4 md:mx-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white hover:text-gray-700 dark:hover:text-gray-700 rounded transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#experience"
            className="p-2 lg:px-4 md:mx-2 text-gray-700 dark:text-white rounded hover:bg-gray-200 hover:text-gray-700 dark:hover:text-gray-700 transition-colors duration-300"
          >
            Experience
          </a>
          <a
            href="#work"
            className="p-2 lg:px-4 md:mx-2 text-gray-700 dark:text-white rounded hover:bg-gray-200 hover:text-gray-700 dark:hover:text-gray-700 transition-colors duration-300"
          >
            Work
          </a>
          <a
            href="#contact"
            className="p-2 lg:px-4 md:mx-2 text-gray-700 dark:text-white rounded hover:bg-gray-200 hover:text-gray-700 dark:hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-gray-700 hover:bg-gray-200 dark:text-white text-center border border-solid hover:text-gray-700 border-gray-700 dark:hover:text-gray-700 dark:border-white rounded transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};
