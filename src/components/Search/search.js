import React from "react";
import "./search.css";

function Search(props) {
    return (
        <div className="container">
            <input 
            className="form-control" 
            type="text" 
            placeholder="Search for Crew Member"
            aria-label="Search"
            onChange={props.handleSearch}/>
        </div>
    )
}

export default Search;