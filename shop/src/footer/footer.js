import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div style={{ fontSize: "2em" }}>
            Пориньте у світ крафтового пива сьогодні!
          </div>
          <button className="btn-main">
            <Link style={{ color: "white", fontWeight: "600" }} to="order">
              ЗРОБИТИ ЗАМОВЛЕННЯ
            </Link>
          </button>
        </div>
        <div className="footer-bottom">
          <div style={{ flexBasis: "40%" }}>
            <p>Про нас</p>
            <p>
              Крафт - ваш надійний партнер у створенні унікальних смаків
              крафтового пива прямо з України.
            </p>
            <p>
              Авторське право <span>&copy;</span>2025 СRAFT
            </p>
          </div>
          <div style={{ flexBasis: "20%" }}>
            <p>Швидкі посилання</p>
            <nav className="nav-page">
              <ul>
                <li>
                  <Link
                    style={{ color: "white" }}
                    to="/"
                    exact
                    activeClassName="active"
                  >
                    Головна
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white" }}
                    to="/about"
                    exact
                    activeClassName="active"
                  >
                    Про нас
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: "white" }}
                    to="/assortment"
                    exact
                    activeClassName="active"
                  >
                    Асортимент
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div style={{ flexBasis: "30%" }}>
            <p>Контактна інформація</p>
            <ul>
              <li>email: kraft@com.ua</li>
              <li>Телефон: 098 -333-33-44</li>
              <li>Адреса: м. Вінниця, вул Шевченка 126</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
