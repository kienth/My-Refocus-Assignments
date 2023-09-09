import Card from "./Card";

export const PostsList = ({ posts, setPosts, filter, setFilter }) => {
    return (
        <div
            style={{
                padding: "4rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", gap: "10px" }}>
                    <button
                        className={`round${!filter ? " active" : ""}`}
                        onClick={() => setFilter(false)}
                    >
                        All posts
                    </button>
                    <button
                        className={`round${filter ? " active" : ""}`}
                        onClick={() => setFilter(true)}
                    >
                        Favorites
                    </button>
                </div>
                <button>+ Add post</button>
            </div>
            <br />
            <br />
            <div className="row">
                {posts.length > 0
                    ? posts.map((item) => {
                          return (
                              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                  <Card item={item} setPosts={setPosts} />
                              </div>
                          );
                      })
                    : "No Data Available"}
            </div>
        </div>
    );
};
