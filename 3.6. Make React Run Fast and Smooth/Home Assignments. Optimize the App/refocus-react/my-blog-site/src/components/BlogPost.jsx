import moment from "moment";

const BlogPost = ({
    blogList,
    setBlogList,
    setIsPopUp,
    setIsEditPopUp,
    setDateFilter,
    search,
    handleDelete,
}) => {
    return (
        <>
            {blogList.length > 0 ? (
                <div className="row">
                    {blogList
                        .filter((item) => item.date.includes(search))
                        .map((item, index) => {
                            return (
                                <div
                                    className="content col-6"
                                    onClick={() =>
                                        setIsPopUp({
                                            isPopUp: true,
                                            item,
                                        })
                                    }
                                >
                                    <h3>{item.title}</h3>
                                    <p>
                                        By {item.author} on{" "}
                                        {moment(item.date).format(
                                            "MMMM DD, YYYY"
                                        )}
                                    </p>
                                    <p>{item.content}</p>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gap: 10,
                                        }}
                                    >
                                        <button
                                            className="success"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setIsEditPopUp({
                                                    isEditPopUp: true,
                                                    item,
                                                    id: index,
                                                });
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="danger"
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                handleDelete(index);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            ) : (
                <div className="content">No blog posts display</div>
            )}
        </>
    );
};

export default BlogPost;
