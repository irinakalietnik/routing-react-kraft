import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { CartContext } from "../context";
import { useContext } from "react";

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
        <div>
          {cart.items.map((item) => (
            <div
              style={{
                display: "flex",
                gap: "30px",

                padding: "12px",
              }}
            >
              <div className="modal-img-block">
                <img src={`${item.image}`} />
              </div>
              <div className="cart-row">
                <div>
                  <div>
                    {item.name} {item.size}
                  </div>
                  <div>{item.price} грн.</div>
                </div>

                <div className="update-block">
                  <div className="update-input">
                    <div
                      className="update-sign"
                      onClick={() =>
                        cart.decrementQuantity(
                          item.id,
                          parseInt(item.quantity, 10) || 1
                        )
                      }
                    >
                      −
                    </div>
                    <input
                      className="input-cart"
                      type="text"
                      value={item.quantity}
                    />
                    <div
                      className="update-sign"
                      onClick={() =>
                        cart.incrementQuantity(item.id, item.quantity)
                      }
                    >
                      +
                    </div>
                  </div>
                  <div className="mobile-none">
                    <strong>{item.price} грн.</strong>
                  </div>
                  <div
                    onClick={() => {
                      cart.remove(item.id);
                    }}
                  >
                    <img
                      width={"20px"}
                      src={`${process.env.PUBLIC_URL}/image/delete.png`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="main-price">
            <span className="mobile-none">Всього: </span> {cost} грн
          </div>
          {/* <table className="modal-table">
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
                  <div></div>
                  <div>{item.name}</div>
                </td>
                <td>
                  <div className="update-input">
                    <div
                      className="update-sign"
                      onClick={() =>
                        cart.decrementQuantity(
                          item.id,
                          parseInt(item.quantity, 10) || 1
                        )
                      }
                    >
                      −
                    </div>
                    <input
                      className="input-cart"
                      type="text"
                      value={item.quantity}
                    />
                    <div
                      className="update-sign"
                      onClick={() =>
                        cart.incrementQuantity(item.id, item.quantity)
                      }
                    >
                      +
                    </div>
                  </div>
                </td>
                <td></td>
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
        </table> */}
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
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
export { ModalCart };
