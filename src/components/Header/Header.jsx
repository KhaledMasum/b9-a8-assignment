import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/listed-books'}>Listed Books</NavLink></li>
                            <li><NavLink to={'/pages-to-read'}>Pages To Read</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'} style={({ isActive }) => {
                            return {
                                border: isActive ? "1px solid #23BE0A" : "1px solid transparent",
                                backgroundColor: isActive ? "#fff" : "#fff",
                                color: isActive ? "#23BE0A" : "rgb(51 65 85)"
                            };
                        }}>Home</NavLink></li>
                        <li><NavLink to={'/listed-books'} style={({ isActive }) => {
                            return {
                                border: isActive ? "1px solid #23BE0A" : "1px solid transparent",
                                backgroundColor: isActive ? "#fff" : "#fff",
                                color: isActive ? "#23BE0A" : "rgb(51 65 85)"
                            };
                        }}>Listed Books</NavLink></li>
                        <li><NavLink to={'/pages-to-read'} style={({ isActive }) => {
                            return {
                                border: isActive ? "1px solid #23BE0A" : "1px solid transparent",
                                backgroundColor: isActive ? "#fff" : "#fff",
                                color: isActive ? "#23BE0A" : "rgb(51 65 85)"
                            };
                        }}>Pages To Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-[#23BE0A] text-white hover:text-[#23BE0A] hover:bg-[#E2E8F0] hover:border-[#fff]">Sign In</a>
                    <a className="btn bg-[#59C6D2] text-white hover:text-[#59C6D2] hover:bg-[#E2E8F0] hover:border-[#fff]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Header;