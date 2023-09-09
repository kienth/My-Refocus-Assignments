import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

const Projects = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [getUrl, setGetUrl] = useState("");

    useEffect(() => {
        if (location.pathname) {
            setGetUrl(location.pathname);
            if (location.pathname === "/project") {
                navigate("/project/townhouse");
            }
        }
    }, [location]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                padding: 10,
            }}
        >
            <div className="project-header">
                <h4 style={{ paddingLeft: 10 }}>Projects</h4>
                <div className="tabs">
                    <NavLink
                        to="/project/townhouse"
                        className={`tab ${
                            getUrl == "/project/card-view" ? "active" : ""
                        }`}
                        activeClassName="project-active"
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        Townhouse
                    </NavLink>
                    <NavLink
                        to="/project/condominium"
                        className="tab"
                        activeClassName="project-active"
                        activeStyle={{ fontWeight: "bold" }}
                    >
                        Condominium
                    </NavLink>
                </div>
            </div>
            <div style={{ padding: 10 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default Projects;
