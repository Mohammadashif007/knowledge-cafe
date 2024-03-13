import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [bookMark, setBookMark] = useState([]);

    const url = "data.json";

    const loadData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const handleMarkRead = (post) => {
        const title = post.title;
        setBookMark([...bookMark, title]);
    };

    return (
        <div className="w-4/5 mx-auto flex gap-2">
            <div className="w-9/12">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        handleMarkRead={handleMarkRead}
                    ></Post>
                ))}
            </div>
            <div className="w-1/4">
                <p className="text-[18px] font-bold mb-3">
                    Spend time on reading:
                </p>
                <div className="bg-gray-300 p-2 rounded-2xl">
                    <p className="text-[20px] font-bold">
                        Book Marks blogs:{bookMark.length}
                    </p>
                    <div className="">
                        <div className="p-3 rounded-[15px] my-2 font-bold">
                            {bookMark.map((x, idx) => (
                                <p
                                    key={idx}
                                    className="bg-[#fff] my-2 rounded-lg p-2"
                                >
                                    {x}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;
