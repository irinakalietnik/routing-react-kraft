import "./order.css";

function Order() {
  return (
    <section className="order-section">
      <div className="container">
        <div className="title-order">ОФОРМИТИ ЗАМОВЛЕННЯ</div>
        <form onSubmit={() => false}>
          <div className="field">
            <label for="name">Ім'я</label>
            <input id="name" type="input" />
          </div>
          <div className="field">
            <label for="adress">Адреса доставки</label>
            <input id="adress" type="input" />
          </div>
          <div className="field">
            <label for="number">Номер телефону</label>
            <input id="number" type="input" />
          </div>
          <button className="btn-main">Виконати замовлення</button>
        </form>
      </div>
    </section>
  );
}
export { Order };
