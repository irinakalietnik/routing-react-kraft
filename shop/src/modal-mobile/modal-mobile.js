import { useContext } from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context";
import "./modalMobile.css";

function ModalMobile() {
  const modal = useContext(CartContext);
  return ReactDOM.createPortal(
    <div>
      <div
        className={
          modal.showMobileMenu ? "mobile-menu" : "mobile-menu mobile-is-open"
        }
      >
        <div className="modal-close" onClick={modal.onclickMobileMenu}>
          <img width="20px" src={`${process.env.PUBLIC_URL}/image/close.png`} />
        </div>
        <div style={{ padding: "16px 24px" }}>
          <div className="site-name">CRAFT</div>

          <nav>
            <ul className="mobil-List">
              <li onClick={modal.onclickMobileMenu}>
                <NavLink
                  className="default"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Головна
                </NavLink>
              </li>
              <li onClick={modal.onclickMobileMenu}>
                <NavLink
                  to="/about"
                  className="default"
                  exact
                  activeClassName="active"
                >
                  Про нас
                </NavLink>
              </li>
              <li onClick={modal.onclickMobileMenu}>
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
          </nav>
        </div>
        <footer>
          <div className="footer">
            <p>Контактна інформація</p>
            <ul>
              <li>email: kraft@com.ua</li>
              <li>Телефон: 098 -333-33-44</li>
              <li>Адреса: м. Вінниця, вул Шевченка 126</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>,
    document.getElementById("modal-mobile")
  );
}
export { ModalMobile };
