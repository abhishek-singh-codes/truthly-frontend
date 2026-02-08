import { NavLink } from "react-router-dom";
import Home from "./home/home"
import Profile from "./profile/profile";
import Chat from "./chat/chat";
import AddFreind from "./addFreind/addFreind";
import Post from "./uploadPost/uploadPost";
import More from "./more/more"; 

const Sidebar = ({ onOpenModal }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <NavLink to="/"><Home /></NavLink>

      <div onClick={onOpenModal}>
        <Post />
      </div>
    </div>
  );
};


export default Sidebar;
