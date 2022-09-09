import React from "react";

function SearchBar() {
  return (
    <div className="px-8 w-5/6">
      <input
        type="search"
        className="text-sm drop-shadow-sm w-5/6 h-8 px-8 py-6  bg-gray-100 rounded-full border-2 focus:border-gray-500 focus:outline-none"
        placeholder="Search..."
      ></input>
    </div>
  );
}

export default SearchBar;
