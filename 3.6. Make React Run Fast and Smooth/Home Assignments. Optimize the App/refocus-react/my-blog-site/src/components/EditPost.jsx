import React, { useEffect, useState } from "react";

const EditPost = ({
    isEditPopUp,
    setIsEditPopUp,
    setBlogList,
    setDateFilter,
}) => {
    const [formData, setFormData] = useState({
        title: "",
        author: "",
        date: "",
        content: "",
    });

    useEffect(() => {
        setFormData(isEditPopUp.item);
    }, [isEditPopUp]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setBlogList((prevData) => {
            const updatedData = [...prevData];
            updatedData[isEditPopUp.id] = formData;
            return updatedData;
        });
        setDateFilter((prevData) => {
            const updatedData = [...prevData];
            updatedData[isEditPopUp.id] = formData.date;
            return updatedData;
        });
        setIsEditPopUp({ isEditPopUp: false, item: {} });
    };
    return (
        <div className="overlay" id="popupOverlay">
            <div className="popup">
                <form className="content" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="author">Author:</label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            value={formData.author}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="content">Content:</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditPost;
