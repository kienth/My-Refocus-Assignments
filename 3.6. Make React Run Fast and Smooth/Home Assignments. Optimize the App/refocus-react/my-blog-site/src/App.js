import { useCallback, useEffect, useState } from "react";
import "./App.css";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import EditPost from "./components/EditPost";
import moment from "moment";

function App() {
    const initialState = {
        title: "",
        author: "",
        date: "",
        content: "",
    };
    const [search, setSearch] = useState("");
    const [blogList, setBlogList] = useState([]);
    const [formData, setFormData] = useState(initialState);
    const [dateFilter, setDateFilter] = useState([]);
    const [isPopUp, setIsPopUp] = useState({ isPopUp: false, item: {} });
    const [isEditPopUp, setIsEditPopUp] = useState({
        isEditPopUp: false,
        item: {},
        id: 0,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            formData.title !== "" &&
            formData.author !== "" &&
            formData.date !== "" &&
            formData.content !== ""
        ) {
            setDateFilter([...dateFilter, formData.date]);
            setBlogList([...blogList, formData]);
        } else {
            alert("Fields must not be empty!");
        }
    };

    const handleDelete = useCallback((index) => {
        setBlogList((prevData) => prevData.filter((_, i) => i !== index));
        setDateFilter((prevData) => prevData.filter((_, i) => i !== index));
    }, []);

    useEffect(() => {
        setFormData(initialState);
    }, [blogList]);

    return (
        <div className="App">
            <Header />
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
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
                <p>Filter by Date:</p>
                <select
                    name=""
                    id=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                >
                    <option value="">All</option>;
                    {dateFilter.length > 0 ? (
                        dateFilter.map((item) => {
                            return (
                                <option value={item}>
                                    {moment(item).format("MMMM DD, YYYY")}
                                </option>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </select>
            </div>
            <br />
            <BlogPost
                blogList={blogList}
                setBlogList={setBlogList}
                setIsPopUp={setIsPopUp}
                setIsEditPopUp={setIsEditPopUp}
                setDateFilter={setDateFilter}
                search={search}
                handleDelete={handleDelete}
            />
            {isPopUp.isPopUp ? (
                <PopUp isPopUp={isPopUp} setIsPopUp={setIsPopUp} />
            ) : (
                <></>
            )}
            {isEditPopUp.isEditPopUp ? (
                <EditPost
                    isEditPopUp={isEditPopUp}
                    setIsEditPopUp={setIsEditPopUp}
                    setBlogList={setBlogList}
                    setDateFilter={setDateFilter}
                />
            ) : (
                <></>
            )}
            <Footer />
        </div>
    );
}

export default App;
