import React, { useState } from "react";
import User from "./User";
import Search from "./Search";
import SortByCompany from "./SortByCompany";
const SearchUser = () => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [companies, setCompanies] = useState("");
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  console.log(filteredData);
  return (
    <div>
      <Search handleInput={handleInput} />
      <SortByCompany companies={filteredData} setState={setCompanies} />
      <User search={search} setState={setFilteredData} companies={companies} />
    </div>
  );
};

export default SearchUser;
