import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";


const Posts = () => {
    const [posts, setPosts] = useState([]);

    const url = "data.json";

    const loadData = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPosts(data);
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="w-4/5 mx-auto flex gap-2">
            <div className="w-9/12">
                {posts.map((post) => (
                    <Post key={post.id} post={post}></Post>
                ))}
            </div>
            <div className="w-1/4">
                <p className="text-[18px] font-bold">
                    Spend time on reading : 212min
                </p>
                
            </div>
        </div>
    );
};

export default Posts;
