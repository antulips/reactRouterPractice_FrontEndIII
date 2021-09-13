import "./NavStyle.css";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">
          <span aria-label="emoji-house" role="img">
            🏡🏡
          </span>
          Home
          <span aria-label="emoji-house" role="img">
            🏡🏡
          </span>
        </Link>
      </li>
      <li>
        <Link to="/guauguaus">
          <span aria-label="emoji-dog" role="img">
            🐶
          </span>
          Guaguagus
          <span aria-label="emoji-dog" role="img">
            🐶
          </span>
        </Link>
      </li>
      <li>
        <Link to="/miaumiaus">
          <span aria-label="emoji-cat" role="img">
            😺
          </span>
          Miaumiaus
          <span aria-label="emoji-cat" role="img">
            😺
          </span>
        </Link>
      </li>
    </ul>
  );
}
