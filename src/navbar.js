import React from "react";
import { GoGlobe } from "react-icons/go";

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-logo"> <GoGlobe />
            </h1>
            <p className="navbar-text">my travel journal</p>
        </div>
    )
}