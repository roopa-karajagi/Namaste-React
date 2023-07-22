import { useState , useContext } from "react";
import LogoImage from  "../../assets/logo.jpg"
import { Link } from 'react-router-dom';
import useOnline from "../../utils/useOnline";
import "./header.css";
import UserContext from "../../utils/userContext";

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
const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false);
  const isOnline = useOnline(); 

  //if we write user like below then we get full user object
  /***
   user: {
    "name": "Dummy User",
    "email": "Dummy.User@gmail.com"
}

const user = useContext(userContext);
console.log("user" , user.user.name);
**/ 

 //that is the reason we need to destructute the user from object

 const { user } = useContext(UserContext);
 /**** 
  * 
  *  console.log("user" , user);
  * {
    "name": "Dummy User",
    "email": "Dummy.User@gmail.com"
}
*
**/

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
              <button className="bg-green-800" onClick={() => setIsLoggedIn(true)}> Log In</button>) : (
                <>
                <span className="py-2 px-4">{user.name}</span>
                <button className="bg-cyan-800" onClick={() => setIsLoggedIn(false)}>Log Out</button>
                </>
              )
        }
      </div>
      
    </div>
    </>
  );
};

export default Header;
