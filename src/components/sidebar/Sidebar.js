import { NavLink } from "react-router-dom";
import Home from "./home/home"
import Profile from "./profile/profile";
import Chat from "./chat/chat";
import AddFreind from "./addFreind/addFreind";
import Post from "./uploadPost/uploadPost";
import More from "./more/more"; 

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <NavLink to="/"><Home /></NavLink>
      <NavLink to="/profile"><Profile /></NavLink>
      <NavLink to="/chat"><Chat /></NavLink>
      <NavLink to="/addFreind"><AddFreind /></NavLink>
      <NavLink to="/post"><Post /></NavLink>
      <NavLink to="/more"><More /></NavLink>
    </div>
  );
};

export default Sidebar;
