import React from "react";
import { Link } from "react-router-dom";

const Header = ({ itemName, navigate }) => {
    return (
        <header>
            <h1>{itemName}</h1>
            <div className="nav-buttons">
                <button onClick={() => navigate(-1)} className="back-button">Back</button>
                <span> </span>
                <Link className="home-button" to={"/"}>Home</Link>
            </div>
            
        </header>
    );
}

export default Header;