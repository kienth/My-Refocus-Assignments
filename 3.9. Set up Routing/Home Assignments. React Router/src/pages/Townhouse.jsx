import React from "react";
import { useNavigate } from "react-router-dom";

const Townhouse = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "start",
                gap: 15,
                flexFlow: "wrap",
            }}
        >
            <div
                className="card"
                onClick={() => {
                    navigate("/project/card-view");
                }}
            >
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 1</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 2</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 3</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 4</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 5</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 6</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 7</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
            <div className="card">
                <div className="img">600 x 400</div>
                <h2 className="card-label">Townhouse 8</h2>
                <p className="card-description">
                    Card Description Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                </p>
            </div>
        </div>
    );
};

export default Townhouse;
