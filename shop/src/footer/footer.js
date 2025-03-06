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
          <div className="site-name">CRAFT</div>
        </div>
        <div className="footer-bottom">
          <div style={{ flexBasis: "40%" }}>
            <p className="mobile-none">Про нас</p>
            <p className="mobile-none">
              Крафт - ваш надійний партнер у створенні унікальних смаків
              крафтового пива прямо з України.
            </p>
            <p>
              Авторське право <span>&copy;</span>2025 СRAFT
            </p>
          </div>
          <div style={{ flexBasis: "20%" }}>
            <p className="mobile-none">Швидкі посилання</p>
            <div className="site-name descktop-none">CRAFT</div>
            <nav className="nav-page">
              <ul className="footer-list">
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
          <div className="mobile-none" style={{ flexBasis: "30%" }}>
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
