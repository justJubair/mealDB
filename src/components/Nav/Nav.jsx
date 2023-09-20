import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="flex flex-col items-center md:flex-row px-8 md:justify-between">
      <h2 className="font-bold py-4 text-2xl text-yellow-500">Meal DB</h2>
      <ul className="flex flex-col gap-4 items-center font-bold text-xl md:flex-row md:gap-8">
        <li>{<NavLink to="/">Home</NavLink>}</li>
        <li>{<NavLink to="/categories">Categories</NavLink>}</li>
        <li>{<NavLink to="/about">About</NavLink>}</li>
        <li>{<NavLink to="/contact">Contact</NavLink>}</li>
      </ul>
    </div>
  );
};

export default Nav;
