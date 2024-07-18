import React from "react"
import bnbLogo from "/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={bnbLogo} className="nav-logo" />
        </nav>
    )
}