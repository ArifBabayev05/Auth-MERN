import Avatar from "../Avatar/Avatar";
import "./Appbar.css";

const Appbar = () => {
    return (
        <div className="appbar">
            <div className="appbar_wrapper">
                {/* logo */}
                <div className="appbar_logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="logo" />
                    <p>mernauth</p>
                </div>
                {/* avatar */}
                <div className="appbar_avatar">
                    <Avatar />
                </div>
            </div>
        </div>
    );
};

export default Appbar;