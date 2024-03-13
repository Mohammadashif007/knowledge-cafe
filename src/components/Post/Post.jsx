import { CiBookmarkCheck } from "react-icons/ci";

const Post = ({ post }) => {
    console.log(post);
    const { title, cover_image, author, publish_date, reading_time, tag } =
        post;
    return (
        <div className="mb-20">
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
                    <CiBookmarkCheck className=" text-2xl" />
                </div>
            </div>
            <p className="text-4xl font-bold my-3">{title}</p>
        </div>
    );
};

export default Post;
