import moment from "moment";
import React, { useEffect, useState } from "react";

const PopUp = ({ isPopUp, setIsPopUp }) => {
    const [item, setItem] = useState({});

    useEffect(() => {
        if (isPopUp.item) {
            setItem(isPopUp.item);
        }
        console.log(isPopUp);
    }, [isPopUp]);

    return (
        <div className="overlay" id="popupOverlay">
            <div className="popup">
                <h3>{item.title}</h3>
                <p>
                    By {item.author} on{" "}
                    {moment(item.date).format("MMMM DD, YYYY")}
                </p>
                <p>{item.content}</p>
                <button
                    className="primary"
                    onClick={() => setIsPopUp({ isPopUp: false, data: {} })}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default PopUp;
