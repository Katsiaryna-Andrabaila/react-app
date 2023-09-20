import { NavLink } from "react-router-dom"

const MyNavbar = () => {
    const setActive = ({isActive}) => ({
        color: isActive ? 'darkred' : 'teal',
      });
      
    return (
        <nav className="navbar">
        <div className="navbar__links">
          <NavLink to="/about" style={setActive}>About</NavLink>
          <NavLink to="/posts" style={setActive}>Posts</NavLink>
        </div>
      </nav>
    )
};

export default MyNavbar;