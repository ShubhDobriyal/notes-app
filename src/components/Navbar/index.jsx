import { Folder } from "../../assets/icons";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar flex align-items-center justify-between px-5 py-1">
      <Logo />
      <div className="flex align-items-center">
        <ul>
          <li>
            <a href="/">
              <Folder className="h-1 w-1" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
