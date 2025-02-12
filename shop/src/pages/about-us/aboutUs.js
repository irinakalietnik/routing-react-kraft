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
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
          }}
          className="container"
        >
          <div>
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
          <div>
            <img
              className="aboutUs-img"
              src="/image/pexels-photo-1324896.jpeg"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "30px",
              alignItems: "center",
            }}
          >
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
            <div>
              <img
                style={{ borderRadius: "6px" }}
                src="/image/pexels-photo-5538161-150x150.jpeg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { AboutUs };
