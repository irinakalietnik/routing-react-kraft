import "./aboutUs.css";

function AboutUs() {
  return (
    <>
      <section className="aboutUs-section-first">
        <div className="container">
          <div className="aboutUs-title">
            Відкрийте для себе крафтове пиво найвищої якості
          </div>
        </div>
      </section>
      <section className="aboutUs-section-second">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
          className="container"
        >
          <div className="abuutUs-text">
            <div style={{ fontSize: "1.5em" }}>Про нас</div>
            <div
              style={{
                fontSize: "2em",
              }}
            >
              Наша компанія
            </div>
            <p>
              За п’ять років ми привнесли нові смаки в світ крафтового пива,
              заслуживши довіру тисяч клієнтів. Наші унікальні сорти радують
              гурманів і любителів пива по всій Україні.
            </p>
            <p>
              Ми прагнемо жетонувати український ринок крафтовим пивом, завдяки
              натуральним інгредієнтам і інноваційним технологіям видобутку.
            </p>
          </div>
          <div className="img-block" style={{ width: "50%" }}>
            <img
              className="aboutUs-img"
              src={`${process.env.PUBLIC_URL}/image/pexels-photo-1324896.jpeg`}
            />
          </div>
        </div>
      </section>
      <section className="aboutUS-section-third">
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              alignItems: "center",
            }}
          >
            <div className="img-block">
              <img
                style={{ borderRadius: "0px 12px " }}
                src={`${process.env.PUBLIC_URL}/image/pexels-photo-5538161-150x150.jpeg`}
              />
            </div>
            <div>
              <div style={{ fontSize: "2em" }}>Місія та бачення</div>

              <p>
                Наша місія полягає в створенні високоякісного крафтового пива,
                яке приносить радість людям, відзначаючи культуру споживання та
                зберігаючи традиції виробництва.
              </p>
              <p>
                Ми прагнемо стати провідним виробником крафтового пива в
                Україні, створюючи неперевершені смаки та досвід споживання для
                наших клієнтів та партнерів.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { AboutUs };
