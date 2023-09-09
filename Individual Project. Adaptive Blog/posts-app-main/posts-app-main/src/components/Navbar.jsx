import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>
            <div className="action-botton">
                <ul className="navbar-list">
                    <li>
                        <a href="#" className="navbar-active">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Reviews</a>
                    </li>
                </ul>
                <div>
                    <button className="border-less">Sign up</button>
                    <button className="round hover">Log in</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
