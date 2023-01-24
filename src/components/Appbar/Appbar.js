import Avatar from "../Avatar/Avatar";
import "./Appbar.css";
import {BiMenuAltLeft} from "react-icons/bi"

const Appbar = ({handleSidebar}) => {
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
                    <BiMenuAltLeft onClick={handleSidebar}/>
                </div>
            </div>
        </div>
    );
};

export default Appbar;