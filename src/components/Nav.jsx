import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="nav-link" to="/about">
              About Me
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
