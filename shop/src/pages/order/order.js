import { useLocation } from "react-router-dom";
import "./order.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context";
import { ShowAlert } from "./showAlert";

function Order() {
  let message;
  const location = useLocation();
  const { state } = location;
  const cart = useContext(CartContext);
  const [value, setValue] = useState("");

  const handleOnchange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.items.length > 0) {
      message = ` Інформація про замовлення на суму ${state.from} грн. відправлено. Очікуйте на дзвінок!`;
    } else {
      message = "Ваша корзина порожня!";
    }
    cart.showMessage(message);
    setValue("");
    cart.deleteCart();
  };

  return (
    <section className="order-section">
      <div className="container">
        <div className="title-order">ОФОРМИТИ ЗАМОВЛЕННЯ</div>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label for="name">
              <div>Ім'я</div>
            </label>
            <input
              id="name"
              onChange={handleOnchange}
              value={value}
              type="input"
              required
            />
          </div>
          <div className="field">
            <label for="adress">
              <div>Адреса доставки</div>
            </label>
            <input id="adress" value={value} type="input" required />
          </div>
          <div className="field">
            <label for="number">
              <div>Номер телефону</div>
            </label>
            <input id="number" value={value} type="input" required />
          </div>
          {cart.items.length > 0 && (
            <div>Сумма до сплати: {state.from} грн.</div>
          )}

          <button className="btn-main">Виконати замовлення</button>
          {cart.showAlert && <ShowAlert />}
        </form>
      </div>
    </section>
  );
}
export { Order };
