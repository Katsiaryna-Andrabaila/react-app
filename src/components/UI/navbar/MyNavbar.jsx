import { NavLink } from "react-router-dom";
import MyButton from "../button/MyButton";
import { useContext } from "react";
import { AuthContext } from "../../../context";

const MyNavbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const setActive = ({ isActive }) => ({
    color: isActive ? "darkred" : "teal",
  });

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <nav className="navbar">
      <div className="navbar__links">
        <NavLink to="/" style={setActive}>
          About
        </NavLink>
        <NavLink to="/posts" style={setActive}>
          Posts
        </NavLink>
      </div>
      {isAuth && (
        <MyButton
          onClick={logout}
          style={{ width: "100px", marginLeft: "10px" }}
        >
          Log out
        </MyButton>
      )}
    </nav>
  );
};

export default MyNavbar;
