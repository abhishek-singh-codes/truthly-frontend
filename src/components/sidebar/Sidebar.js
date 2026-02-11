import { NavLink } from "react-router-dom";
import Home from "./home/home"
import Profile from "./profile/profile";
import Post from "./uploadPost/uploadPost";

const Sidebar = ({ onOpenModal }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <NavLink to="/"><Home /></NavLink>

      <div onClick={onOpenModal}>
        <Post />
      </div>

      <NavLink to="/profile"><Profile /></NavLink>
    </div>
  );
};


export default Sidebar;
