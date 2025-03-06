import { products } from "../../json";
import { useNavigate, useParams } from "react-router-dom";
import "./details.css";
import { useContext } from "react";
import { CartContext } from "../../context";
import { useState } from "react";
import { Delivery } from "./details-components/delivery";
import { Paynment } from "./details-components/payment";
import { Description } from "./details-components/description";
import { Specifications } from "./details-components/specifications";
function DetailsProduct(props) {
  const { productId } = useParams();
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  const cart = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [stateDelivery, setStateDelivery] = useState("DELIVERY");
  const [stateInfo, setStateInfo] = useState("DESCRIPTION");
  return (
    <div className="container">
      {products
        .filter((it) => +productId === it.id)
        .map((el) => (
          <div className="details-main">
            <div className="left-block">
              <div className="mobile-box">
                <div className="details-back" onClick={handleClick}>
                  <img
                    width="16px"
                    src={`${process.env.PUBLIC_URL}/image/left.png`}
                  />
                  <span className="link-back">{el.category}</span>
                </div>

                <div className="details-title">{el.name}</div>
                <div>{el.size}</div>
                <div style={{ fontSize: "12px", color: "#db4d34" }}>
                  в наявності
                </div>
              </div>
              <div className="img-box">
                <img width="100%" src={el.image} />
              </div>

              <div
                className="mobile-box"
                style={{
                  fontSize: "1.7em",
                  fontWeight: "600",
                  color: "grey",
                }}
              >
                {el.price} грн.
              </div>
              <div className="mobile-box mobile-input-box">
                <input
                  className="input-cart"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(parseInt(e.target.value, 10) || 1)
                  }
                />
                <button
                  className="btn-add-cart"
                  onClick={() => {
                    cart.append(el, quantity);
                  }}
                >
                  Додати до кошика
                </button>
              </div>

              <div className="info-block">
                <div style={{ display: "flex", gap: "40px" }}>
                  <div
                    className={
                      stateInfo === "DESCRIPTION"
                        ? "bolt-dark-text"
                        : "bolt-light-text"
                    }
                    onClick={() => setStateInfo("DESCRIPTION")}
                  >
                    Опис
                  </div>
                  <div
                    className={
                      stateInfo === "Specifications"
                        ? "bolt-dark-text"
                        : "bolt-light-text"
                    }
                    onClick={() => setStateInfo("Specifications")}
                  >
                    Характеристики
                  </div>
                </div>
                {stateInfo === "DESCRIPTION" ? (
                  <Description />
                ) : (
                  <Specifications item={el} />
                )}
              </div>
            </div>
            <div className="right-block">
              <div className="desktop-box">
                <div className="details-back" onClick={handleClick}>
                  <img
                    width="16px"
                    src={`${process.env.PUBLIC_URL}/image/left.png`}
                  />
                  <span className="link-back">{el.category}</span>
                </div>

                <div className="details-title">{el.name}</div>
                <div>{el.size}</div>
                <div style={{ fontSize: "12px", color: "#db4d34" }}>
                  в наявності
                </div>
              </div>
              <div
                className="desktop-box"
                style={{ fontSize: "1.7em", fontWeight: "600", color: "grey" }}
              >
                {el.price} грн.
              </div>

              <div className=" input-box ">
                <input
                  className="input-cart"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(parseInt(e.target.value, 10) || 1)
                  }
                />
                <button
                  className="btn-add-cart"
                  onClick={() => {
                    cart.append(el, quantity);
                  }}
                >
                  Додати до кошика
                </button>
              </div>
              <div className="delivery-block">
                <div style={{ display: "flex", gap: "40px" }}>
                  <div
                    className={
                      stateDelivery === "DELIVERY"
                        ? "bolt-dark-text"
                        : "bolt-light-text"
                    }
                    onClick={() => setStateDelivery("DELIVERY")}
                  >
                    Доставка
                  </div>
                  <div
                    className={
                      stateDelivery === "PAYMENT"
                        ? "bolt-dark-text"
                        : "bolt-light-text"
                    }
                    onClick={() => setStateDelivery("PAYMENT")}
                  >
                    Оплата
                  </div>
                </div>
                {stateDelivery === "DELIVERY" ? <Delivery /> : <Paynment />}
              </div>
            </div>
            {/* <ul
              style={{
                display: "flex",
                fontSize: "1.5em",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <li className="details-back" onClick={handleClick}>
                <img
                  width="16px"
                  src={`${process.env.PUBLIC_URL}/image/left.png`}
                />
                <span className="light-link"> Повернутись назад</span>
              </li>
              <li>{el.name}</li>
              <li>{el.size}</li>
              <li>{`${el.price} грн.`}</li>
            </ul> */}
            {/* <div style={{ display: "flex" }}>
              <img width="100%" src={el.image} />
            </div>
            <div onClick={() => cart.append(el)}>
              <span>додати до корзини</span>
              <div>{cart.items.length}</div>
            </div> */}
          </div>
        ))}
    </div>
  );
}
export { DetailsProduct };
