import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const ListItem = ({ children }) => {
  return (
    <li className="self-center cursor-pointer p-2 text-teal-600">{children}</li>
  );
};

const Navigation = () => {
  return (
    <nav className="bg-zinc-200 p-4 text-lg md:mb-4 rounded-b-lg shadow-md">
      <div className="md:container mx-auto flex justify-between content-center">
        <div className="w-40 max-w-xs">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex content-center">
          <ListItem>
            <Link to="/login">Login</Link>
          </ListItem>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
