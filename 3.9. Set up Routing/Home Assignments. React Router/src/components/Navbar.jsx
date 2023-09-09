import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div class="app-bar">
            <div class="logo">MEGAESTATE</div>
            <div class="tabs">
                <NavLink
                    exact
                    to="/"
                    className="tab"
                    activeClassName="active"
                    activeStyle={{ fontWeight: "bold" }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/project"
                    className="tab"
                    activeClassName="active"
                    activeStyle={{ fontWeight: "bold" }}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/about"
                    className="tab"
                    activeClassName="active"
                    activeStyle={{ fontWeight: "bold" }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    className="tab"
                    activeClassName="active"
                    activeStyle={{ fontWeight: "bold" }}
                >
                    Contact
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
