import { NavLink } from "react-router-dom";

import "./header.css";
function Header() {
  return (
    <header>
      <div className="container">
        <div className="site-name">KRAFT</div>
        <nav className="nav-page">
          <ul>
            <li>
              <NavLink
                style={{ color: "black" }}
                to="/"
                exact
                activeClassName="active"
              >
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: "black" }}
                to="/about"
                exact
                activeClassName="active"
              >
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: "black" }}
                to="/assortment"
                exact
                activeClassName="active"
              >
                Асортимент
              </NavLink>
            </li>
          </ul>
          <div className="order">
            <NavLink
              style={{
                color: "#da2d0e",
                textDecoration: "none",
                fontWeight: "600",
              }}
              to="order"
              exact
              activeClassName="active"
            >
              ЗАМОВИТИ ЗАРАЗ
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
export { Header };
