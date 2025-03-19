import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { CurrentUserContext } from "../context/CurrentUserProvider";
import { Column } from "./Column";
import { LogIn } from "./LogIn";
import { Row } from "./Row";
import { SignUp } from "./SignUp";
import { ViewCart } from "./ViewCart";
import "./SiteHeader.css"; // Import the CSS file for styling
import HealthyFoods from "../assets/healthyfoodsnew.png";

export const SiteHeader = () => {
  const [currentUser, , setToken] = useContext(CurrentUserContext);
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="header-top">
        <img src={HealthyFoods} alt="Healthy Foods Logo" className="logo" onClick={() => navigate("/")} />
        <nav className="nav-links">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/meals")}>Meals</button>
          <button className="nav-button" onClick={() => navigate("/contact")}>Contact Us</button>
          <button className="nav-button" onClick={() => navigate("/about")}>About Us</button>
        </nav>
        <div className="auth-buttons">
          {currentUser ? (
            <>
              <button className="auth-button" onClick={() => navigate("/orders")}>View Orders</button>
              <button className="auth-button" onClick={() => setToken(null)}>Sign Out</button>
            </>
          ) : (
            <>
              <SignUp />
              <LogIn />
            </>
          )}
          <ViewCart />
        </div>
      </div>
    </header>
  );
};
