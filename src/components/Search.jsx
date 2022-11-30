import React from "react";

const Search = ({ handleInput }) => {
  return (
    <div className="search-container">
      <input className="search" type="text" onChange={handleInput} />
    </div>
  );
};

export default Search;
