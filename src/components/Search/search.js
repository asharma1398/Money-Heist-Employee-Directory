import React from "react";
import "./search.css";

function Search(props) {
    return (
        <div class="container">
            <input 
            class="form-control" t
            ype="text" 
            placeholder="Search for Crew Member" 
            aria-label="Search"
            onChange={props.handleSearch}/>
        </div>
    )
}

export default Search;