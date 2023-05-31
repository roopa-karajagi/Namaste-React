import LogoImage from  '../../../assets/logo.jpg'
import './header.css'


//Title of the APp /named import
export const Title = () => (
    <div className="title_comp">
      <a href="/">
        <img className="logo" src={LogoImage} alt="Food villa" />
      </a>
    </div>
  );

// Header Component Rendering //default imports
  //composing Components
const HeaderComponent = () => {
    return (
      <div className="header_comp">
        <Title />
        <nav className="nav-items">
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Contact </li>
            <li>Menu</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    );
  };


  export default HeaderComponent
