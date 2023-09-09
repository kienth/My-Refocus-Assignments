import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMessage,
    faHeart as isNotHeart,
} from "@fortawesome/free-regular-svg-icons";
import { faHeart as isHeart } from "@fortawesome/free-solid-svg-icons";

const formatNumber = (number) => {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + "k";
    } else if (number >= 1000000 && number < 1000000000) {
        return (number / 1000000).toFixed(1) + "m";
    } else if (number >= 1000000000) {
        return (number / 1000000000).toFixed(1) + "b";
    } else {
        return number.toString();
    }
};

const formatDate = (date) => {
    const originalDate = new Date(date);
    return originalDate.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
};

const Card = ({ item, setPosts }) => {
    return (
        <div className="card">
            <div className="img">image</div>
            <div className="card-info">
                <h2 className="card-label">{item.title}</h2>
                <p className="card-description">{item.text}</p>
                <hr />
                <div
                    className="card-action"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                    }}
                >
                    <div style={{ fontSize: 10, color: "#c0bfcf" }}>
                        {formatDate(item.date)} . {item.author}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            gap: "10px",
                        }}
                    >
                        <a
                            href="#"
                            style={{
                                fontSize: 10,
                                alignItems: "center",
                                textDecoration: "none",
                                color: "#c0bfcf",
                            }}
                        >
                            <FontAwesomeIcon icon={faMessage} />{" "}
                            {formatNumber(item.comments.length)}
                        </a>
                        <a
                            href="#"
                            style={{
                                fontSize: 10,
                                alignItems: "center",
                                textDecoration: "none",
                                color: "#c0bfcf",
                            }}
                            onClick={() =>
                                setPosts((prevData) => {
                                    return prevData.map((value) => {
                                        if (item.id === value.id) {
                                            return {
                                                ...value,
                                                isLiked: !value.isLiked,
                                            };
                                        }
                                        return value;
                                    });
                                })
                            }
                        >
                            <FontAwesomeIcon
                                icon={item.isLiked ? isHeart : isNotHeart}
                                style={{ color: item.isLiked ? "#0266ff" : "" }}
                            />{" "}
                            {formatNumber(item.likes)}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
