import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const capitalizeFirstLetterOfWords = (inputString) => {
    const stringWithSpaces = inputString.replace(/-/g, " ");

    return stringWithSpaces
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const CardView = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [list, setList] = useState([]);

    useEffect(() => {
        const url = location.pathname.split("/");
        let getUrl = [];
        let addUrl = [];
        if (url.length > 0) {
            url.map((item) => {
                if (item === "") {
                    getUrl.push({ name: "Home", url: `/${item}` });
                } else {
                    getUrl.push({
                        name: capitalizeFirstLetterOfWords(item),
                        url: `${addUrl.toString()}/${item}`,
                    });
                    addUrl.push(`/${item}`);
                }
            });
        }

        setList(getUrl);
    }, [location]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
            }}
        >
            <nav className="breadcrumbs">
                <ul>
                    {list.map((item) => {
                        return (
                            <li>
                                <a onClick={() => navigate(item.url)}>
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            <div className="card">
                <div className="img">image</div>
                <h2 className="card-label">Townhouse 1</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
        </div>
    );
};

export default CardView;
