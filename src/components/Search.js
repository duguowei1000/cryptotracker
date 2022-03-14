
   
import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    //searchValue is set here
    setSearchValue(e.target.value); //stores search term in searchValue state
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue); //passing back as props
    setSearchValue(""); //adding this to automatically clear input field
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;