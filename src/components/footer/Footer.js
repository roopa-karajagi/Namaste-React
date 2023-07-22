import { useContext } from 'react';
import './footer.css'
import UserContext from '../../utils/userContext';

const Footer = () => {
  const {user} = useContext(UserContext);
    return (
      <div className="p-4 text-center m-auto text-red-500  footer">
        Developed with love by {user.name}
      </div>
    )
  };

  export default Footer;