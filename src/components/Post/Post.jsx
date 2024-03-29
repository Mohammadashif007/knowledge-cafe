import { CiBookmarkCheck } from "react-icons/ci";
import PropTypes from 'prop-types';

const Post = ({ post, handleMarkRead, handleReadingTime }) => {
    const { title, cover_image, author, publish_date, reading_time, tags, id } =
        post;
    return (
        <div className="mb-20 border-2 border-[#000000] p-3 rounded-2xl">
            <img src={cover_image} alt="" />
            <div className="flex justify-between mt-6">
                <div className="flex items-center gap-3">
                    <img width="50px" src={author.image} alt="" />
                    <div>
                        <p className="font-bold text-[18px]">{author.name}</p>
                        <p>{publish_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <p>{reading_time} Min</p>
                    <CiBookmarkCheck
                        onClick={() => handleMarkRead(post)}
                        className=" text-2xl cursor-pointer"
                    />
                </div>
            </div>
            <p className="text-4xl font-bold my-3">{title}</p>
            <div className="flex gap-3 my-5">
                {tags.map((tag, idx) => (
                    <div key={idx} className="text-[16px] font-bold">
                        <p>#{tag}</p>
                    </div>
                ))}
            </div>
            <button
                onClick={() => handleReadingTime(post.reading_time, id)}
                className="border-b-2 border-[#000]"
            >
                Mark as Read
            </button>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
    handleMarkRead: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}

export default Post;
