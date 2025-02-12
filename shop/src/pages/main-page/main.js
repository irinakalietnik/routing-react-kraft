import "./main-page.css"
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { AboutUs } from "../about-us/aboutUs";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <>
      <section className="first-main-section">
        <div className="container">
          <div className="main-title">Справжнє крафтове пиво з України</div>
          <h3>
            Спеціалізуємось на виготовленні унікальних сортів пива, що радують
            смакові рецептори справжніх гурманів.
          </h3>
          <button className="btn-main">
            <Link style={{ color: "white", fontWeight: "600" }} to="assortment">
              Переглянути асортимент
            </Link>
          </button>
        </div>
      </section>
      <section className="second-main-section">
        <div className="container">
          <div style={{ display: "flex" }}>
            <div
              style={{
                flexBasis: "50%",
              }}
            >
              <div>ПОСЛУГИ</div>
              <div
                style={{
                  fontSize: "2em",
                  flexBasis: "50%",
                }}
              >
                Основні послуги нашого інтернет-магазину крафтового пива
              </div>
            </div>
            <div
              style={{
                borderLeft: "1px solid red",
                paddingLeft: "40px",
                flexBasis: "50%",
              }}
            >
              Ми пропонуємо широкий вибір сортів пива, кожен з яких
              виготовляється на власному виробництві з високоякісних
              інгредієнтів, щоб задовольнити навіть найвибагливіших гурманів.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "40px 0 0 0",
            }}
          >
            <div className="services-img-block">
              <div>
                <img src="/image/pexels-photo-707408-150x150.jpeg" />
              </div>
              <div style={{ fontSize: "1.5em" }}>Виготовлення пива</div>
              <div>Унікальні сорти пива, виготовлені з любов’ю.</div>
              <div style={{ textTransform: "uppercase" }}>
                <Link to="/about">Переглянути більше</Link>
              </div>
            </div>
            <div className="services-img-block">
              <div>
                <img src="/image/pexels-photo-1267360.jpeg" />
              </div>
              <div style={{ fontSize: "1.5em" }}>Доставка пива</div>
              <div>Зручна доставка крафтового пива додому.</div>
              <div style={{ textTransform: "uppercase" }}>
                <Link to="/about">Переглянути більше</Link>
              </div>
            </div>
            <div className="services-img-block">
              <div>
                <img src="/image/pexels-photo-1267700.jpeg" />
              </div>
              <div style={{ fontSize: "1.5em" }}>Спеціальні пропозиції</div>
              <div>Пропозиції для гурманів та любителів пива.</div>
              <div style={{ textTransform: "uppercase" }}>
                <Link to="/about">Переглянути більше</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="third-main-section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              maxWidth: "600px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <div>ПРО НАС</div>
            <div style={{ fontSize: "2em" }}>
              Історія успіху нашого крафтового пивоваріння в Україні
            </div>
            <div>
              Ми – команда ентузіастів, яка створює крафтове пиво з любов’ю та
              натхненням.
            </div>
          </div>
          <div style={{ height: "440px", display: "flex", margin: "40px 0" }}>
            <img
              style={{
                width: "100%",
                borderRadius: "0 40px 0 40px",
                objectFit: "cover",
              }}
              src="/image/pexels-photo-3779784.jpeg"
            />
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{ flexBasis: "50%", fontSize: "1.3em", fontWeight: "600" }}
            >
              Наша історія
            </div>
            <div style={{ flexBasis: "50%" }}>
              <div>
                Компанія ‘Крафт’ була заснована п’ять років тому з метою
                створення унікального крафтового пива, яке б передавало
                справжній смак. Протягом років ми завоювали популярність,
                постійно вдосконалюючи технології та рецепти, щоб задовольняти
                смаки наших споживачів.
              </div>
              <div style={{ marginTop: "20px" }}>
                <Link style={{ color: "#da2d0e" }} to="about">
                  ДІЗНАТИСЬ БІЛЬШЕ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-main-section">
        <div className="container">
          <div
            style={{
              color: "white",
              margin: "30px",
              fontSize: "2em",
              textAlign: "center",
            }}
          >
            Відгуки наших клієнтів
          </div>
          <div className="reviews-block">
            <div className="review">
              <div
                style={{
                  width: "100px",
                }}
              >
                <img style={{ width: "100%" }} src="/image/left-quotes.png" />
              </div>
              <div>Дуже подобається ваше пиво! Справжній смак.</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div className="reviews-img">
                  <img
                    width="100%"
                    style={{ borderRadius: "50%" }}
                    src="/image/team-skip-03.jpg"
                  />
                </div>
                <div>Олександр Коваль</div>
              </div>
            </div>
            <div className="review">
              <div
                style={{
                  width: "100px",
                }}
              >
                <img style={{ width: "100%" }} src="/image/left-quotes.png" />
              </div>
              <div>Купую ваше пиво вже кілька років, ніколи не розчаровує.</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div className="reviews-img">
                  <img
                    width="100%"
                    style={{ borderRadius: "50%" }}
                    src="/image/team-skip-04.jpg"
                  />
                </div>
                <div>Катерина Левченко</div>
              </div>
            </div>
            <div className="review">
              <div
                style={{
                  width: "100px",
                }}
              >
                <img style={{ width: "100%" }} src="/image/left-quotes.png" />
              </div>
              <div>Чудове пиво з оригінальними смаками, рекомендую всім!</div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <div className="reviews-img">
                  <img
                    width="100%"
                    style={{ borderRadius: "50%" }}
                    src="/image/team-skip-02.jpg"
                  />
                </div>
                <div>Дмитро Сердюк</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fifth-main-section">
        <div className="container">
          <div style={{ textAlign: "center", margin: "40px" }}>
            <div>НАША КОМАНДА</div>
            <div style={{ fontSize: "2em" }}>
              Експерти у виробництві крафтового пива
            </div>
          </div>
          <div className="team-grid">
            <div>
              <img src="/image/team-skip-01.jpg" />
            </div>
            <div className="persona-info">
              <h3>Майкл Христофер</h3>
              <p>Посада</p>
            </div>
            <div>
              <img src="/image/team-skip-02.jpg" />
            </div>
            <div className="persona-info">
              <h3>Давид Олександр</h3>
              <p>Посада</p>
            </div>
            <div className="persona-info">
              <Link style={{ fontSize: "1.2em", color: "#da2d0e" }} to="/about">
                {" "}
                Приєднуйтесь до нашої команди
              </Link>
            </div>
            <div></div>
            <div>
              <img src="/image/team-skip-03.jpg" />
            </div>
            <div className="persona-info">
              <h3>Бенджамін Томас</h3>
              <p>Посада</p>
            </div>
            <div>
              <img src="/image/team-skip-04.jpg" />
            </div>
            <div className="persona-info">
              <h3>Емілі Грейс</h3>
              <p>Посада</p>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
      {/* <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes> */}
    </>
  );
}
export { Main };
