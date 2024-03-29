import { useEffect } from "react";
import { useState } from "react";
import Post from "../Post/Post";
// import PropTypes from 'prop-types';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

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
       
       setBookMark([...bookMark, post])
    };

    const handleReadingTime = (time, id) => {
        setReadingTime( readingTime + time)
        console.log(id);
        // const search = bookMark.filter(x => x.id !== id)
        // setBookMark(search)
        console.log(bookMark);
        const search = bookMark.filter(x => x.id !== id);
        setBookMark(search);
    }

    return (
        <div className="w-4/5 mx-auto flex gap-2">
            <div className="w-9/12">
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        handleMarkRead={handleMarkRead}
                        handleReadingTime={handleReadingTime}
                    ></Post>
                ))}
            </div>
            <div className="w-1/4">
                <p className="text-[18px] font-bold mb-3">
                    Spend time on reading: {readingTime}
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
                                    {x.title}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Posts.propTypes = {

// }

export default Posts;
