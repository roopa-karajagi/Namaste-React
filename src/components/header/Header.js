import { useState } from "react";
import LogoImage from  "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import useOnline from "../../utils/useOnline";
import "./header.css";

//Title of the APp
export const Title = () => (
  <div className="title_comp">
    <a href="/">
      <img className="h-24 w-24 rounded-xl" src={LogoImage} alt="Food villa" />
    </a>
  </div>
);

// Header Component Rendering
//composing Components
const HeaderComponent = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  
  return (
    <>
    <div className="header_comp flex justify-between p-1">
      <Title />
      <div className="title" id="title">
        Food Villa
      </div>
      <nav className="nav-items">
        <ul className="list-items">
          <Link to="/">
          <li>Home</li>
          </Link>
          
          <Link to="/about">
          <li>About US</li>
          </Link>
          <Link to="/contact">
          <li>Contact </li>
          </Link>
          <Link to="/menu">
          <li>Menu</li>
          </Link>
          <Link to="/cart">
          <li>Cart</li>
          </Link>
          <Link to="/instamart">
            <li>InstaMart</li>
          </Link>
          
        </ul>
      </nav>
      {/* {
        //Javascript Expressions works here but not Javascript statements
        // a = 10;
        // console.log(a);

        ((a =10 ) , console.log(a))
      } */}
      <div>
      { !isOnline ?  '🔴' : '✅'}
      </div>
      <div className="auth-buttons">
        {
            !isLoggedIn ? (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}> Log In</button>) : (
                <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Log Out</button>
              )
        }
      </div>
      
    </div>
    </>
  );
};

export default HeaderComponent;
