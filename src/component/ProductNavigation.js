import React from "react";
import { Link } from "react-router-dom";

function ProductNavigation() {
  <header>
    <nav
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <ul>
        <li>
          <Link to="/product">All Product</Link>
        </li>
      </ul>
    </nav>
  </header>;
}

export default ProductNavigation;
