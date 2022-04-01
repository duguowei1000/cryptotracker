
   
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
    props.toggle()
    setSearchValue(""); //adding this to automatically clear input field
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
      />

      <input className="searchunits" onClick={callSearchFunction} type="submit" value="SEARCH" />

      {/* <button className="searchunits" onClick= {props.handleClick}> Back to List </button> */}



    </form>
  );
};

export default Search;