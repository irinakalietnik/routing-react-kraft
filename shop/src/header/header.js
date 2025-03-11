import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context";

import "./header.css";
function Header() {
  const cart = useContext(CartContext);

  return (
    <header>
      <div className="container">
        <div className="site-name">CRAFT</div>
        <nav className="nav-page">
          <ul className="list-menu">
            <li>
              <NavLink
                className="default"
                to="/"
                exact
                activeClassName="active"
              >
                Головна
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="default"
                exact
                activeClassName="active"
              >
                Про нас
              </NavLink>
            </li>
            <li>
              <NavLink
                className="default"
                to="/assortment"
                exact
                activeClassName="active"
              >
                Асортимент
              </NavLink>
            </li>
          </ul>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div onClick={cart.onclickMobileMenu} className="menu">
              <img
                width={"30px"}
                src={`${process.env.PUBLIC_URL}/image/menu.png`}
              />
            </div>
            <div style={{ position: "relative" }} onClick={cart.toggleShow}>
              <div className="count-cart">{cart.items.length}</div>
              <img
                width={"50px"}
                src={`${process.env.PUBLIC_URL}/image/cart.png`}
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export { Header };
