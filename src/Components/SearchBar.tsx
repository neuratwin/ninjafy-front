import React from "react";

function SearchBar() {
  return (
    <div className="px-16">
      <input
        type="search"
        className="text-sm drop-shadow-sm w-2/3 h-8 px-8 py-6  bg-gray-100 rounded-full border-2 focus:border-cyan-500 focus:outline-none"
        placeholder="Search..."
      ></input>
    </div>
  );
}

export default SearchBar;
