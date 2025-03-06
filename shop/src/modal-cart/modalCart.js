import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { CartContext } from "../context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./modalCart.css";
function ModalCart() {
  const cart = useContext(CartContext);
  const cost = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return ReactDOM.createPortal(
    <div className="backdrop">
      <div className="modal">
        <div className="modal-close" onClick={cart.toggleShow}>
          <img width="20px" src={`${process.env.PUBLIC_URL}/image/close.png`} />
        </div>
        <div
          className="modal-title"
          style={{ fontSize: "1.5em", fontWeight: "600" }}
        >
          Кошик
        </div>
        <table className="modal-table">
          <thead>
            <tr>
              <th></th>
              <th>Кількість</th>
              <th>Вартість</th>
              <th>Сумма</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item) => (
              <tr>
                <td
                  className="modal-img-block"
                  style={{ display: "flex", gap: "6px", alignItems: "center" }}
                >
                  <div>
                    <img src={`${item.image}`} />
                  </div>
                  <div>{item.name}</div>
                </td>
                <td>
                  <input
                    className="input-cart"
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      cart.updateQuantity(
                        item.id,
                        parseInt(e.target.value, 10) || 1
                      )
                    }
                  />
                </td>
                <td>
                  <strong>{item.price} грн.</strong>
                </td>
                <td>
                  <strong>{item.price * item.quantity} грн.</strong>
                </td>
                <td
                  onClick={() => {
                    cart.remove(item.id);
                  }}
                >
                  <img
                    width={"20px"}
                    src={`${process.env.PUBLIC_URL}/image/delete.png`}
                  />
                </td>
              </tr>
            ))}
            <tr>
              <th colSpan="3">До сплати </th>
              <th>{cost} грн.</th>
              <th></th>
            </tr>
          </tbody>
        </table>
        <div className="btns-block">
          <Link
            style={{ color: "grey" }}
            onClick={cart.toggleShow}
            to="/assortment"
          >
            <div className="details-back">
              <img
                width="16px"
                src={`${process.env.PUBLIC_URL}/image/left.png`}
              />
              <span>Повернутись до покупок</span>
            </div>
          </Link>
          <button className="btn-main">
            <Link
              state={{ from: cost }}
              onClick={cart.toggleShow}
              style={{ color: "white", fontWeight: "600" }}
              to="order"
            >
              ЗРОБИТИ ЗАМОВЛЕННЯ
            </Link>
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
export { ModalCart };
