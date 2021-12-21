import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const Search = (props) => {
  return (
    <form className="search">
      {/*         <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        /> */}
      <TextField
        type="text"
        id="outlined-basic"
        label="Pesquisar filme"
        style={{ width: 350 }}
        color="secondary"
      />
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        type="submit"
        value="SEARCH"
      >
        <SearchIcon />
      </Button>
      {/* <input onClick={callSearchFunction} type="submit" value="SEARCH" /> */}
    </form>
  );
};

export default Search;
