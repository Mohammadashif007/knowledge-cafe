import profileImg from "../../assets/images/profile.png";

const Header = () => {
    return (
        <div className="flex justify-between py-10 w-4/5 mx-auto">
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img src={profileImg} alt="" />
        </div>
    );
};

export default Header;
