import "./App.css";
import { createContext } from "react";
import { useReducer } from "react";
import { ModalCart } from "./modal-cart/modalCart";
import { ModalMobile } from "./modal-mobile/modal-mobile";
import { CartReducer } from "./reducer/Reducer";

export const CartContext = createContext();

const initState = {
  items: [],
  showItems: false,
  showAlert: null,
  showMobileMenu: false,
};

function Context(props) {
  const [value, dispatch] = useReducer(CartReducer, initState);

  value.onclickMobileMenu = () => {
    dispatch({ type: "MOBILEMENU_SHOW" });
  };

  value.append = (item, quantity = 1) => {
    dispatch({
      type: "APPEND_ITEM",
      payload: { item: item, quantity: quantity },
    });
    dispatch({ type: "TOGGLE_SHOW" });
  };

  value.remove = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
  };

  value.toggleShow = () => {
    dispatch({ type: "TOGGLE_SHOW" });
  };

  value.hideAlert = () => {
    dispatch({ type: "HIDE_ALERT" });
  };

  value.incrementQuantity = (productId, newQuantity) => {
    dispatch({ type: "UPDATE_QUANTITY+", payload: { productId, newQuantity } });
  };
  value.decrementQuantity = (productId, newQuantity) => {
    dispatch({
      type: "UPDATE_QUANTITY-",
      payload: { productId, newQuantity },
    });
  };

  value.showMessage = (message) => {
    dispatch({
      type: "SHOW_ALERT",
      payload: message,
    });
  };

  value.deleteCart = () => {
    dispatch({ type: "DELETE-CART" });
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
      {value.showItems && <ModalCart />}
      <ModalMobile />
    </CartContext.Provider>
  );
}
export { Context };
