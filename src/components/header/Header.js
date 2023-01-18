import { useState } from "react";
import LogoImage from "../../../assets/logo.jpg";
import "./header.css";

//Title of the APp
export const Title = () => (
  <div className="title_comp">
    <a href="/">
      <img className="logo" src={LogoImage} alt="Food villa" />
    </a>
  </div>
);

// Header Component Rendering
//composing Components
const HeaderComponent = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  return (
    <div className="header_comp">
      <Title />
      <div className="title" id="title">
        Food Villa
      </div>
      <nav className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact </li>
          <li>Menu</li>
          <li>Cart</li>
        </ul>
      </nav>
      {/* {
        //Javascript Expressions works here but not Javascript statements
        // a = 10;
        // console.log(a);

        ((a =10 ) , console.log(a))
      } */}
      <div className="auth-buttons">
        {
            !isLoggedIn ? (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}> Log In</button>) : (
                <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Log Out</button>
              )
        }
      </div>
      
    </div>
  );
};

export default HeaderComponent;
