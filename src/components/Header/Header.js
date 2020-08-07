import React from 'react';
import "./header.css";

function Header() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Money Heist Directory</h1>
                    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
                </div>
            </div>
        </>
    )
}

export default Header;