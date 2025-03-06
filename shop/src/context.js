import { createContext } from "react";
import { useReducer } from "react";
import { ModalCart } from "./modal-cart/modalCart";
import { ModalMobile } from "./modal-mobile/modal-mobile";
import "./App.css";

export const CartContext = createContext();

export default function CartReducer(state, { type, payload }) {
  switch (type) {
    case "APPEND_ITEM":
      let newCart = null;
      // перевірити чи є такий товар в корзині
      const itemIndex = state.items.findIndex(
        (value) => value.id === payload.item.id
      );
      if (itemIndex < 0) {
        //такого товару ще нема
        const newItem = {
          ...payload.item,
          quantity: payload.quantity,
        };
        newCart = [...state.items, newItem];
      } else {
        const newItem = {
          ...state.items[itemIndex],
          quantity: state.items[itemIndex].quantity + payload.quantity,
        };
        newCart = [...state.items];
        newCart.splice(itemIndex, 1, newItem);
      }
      return {
        ...state,
        items: newCart,
      };
    case "SHOW_ALERT":
      return { ...state, showAlert: payload };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: payload.newQuantity }
            : item
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    case "TOGGLE_SHOW": // показати\приховати корзину
      return {
        ...state,
        showItems: !state.showItems,
      };
    case "HIDE_ALERT":
      return {
        ...state,
        showAlert: null,
      };
    case "DELETE-CART":
      return {
        ...state,
        items: [],
      };
    case "MOBILEMENU_SHOW":
      return { ...state, showMobileMenu: !state.showMobileMenu };
    default:
      return state;
  }
}

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

  value.updateQuantity = (productId, newQuantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, newQuantity } });
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
  console.log(value.showMobileMenu);

  return (
    <CartContext.Provider value={value}>
      <ModalMobile />
      {props.children}
      {value.showItems && <ModalCart />}

      {/* {value.showMobileMenu && <ModalMobile />} */}
    </CartContext.Provider>
  );
}
export { Context };
