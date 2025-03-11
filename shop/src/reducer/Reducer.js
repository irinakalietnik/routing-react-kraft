function CartReducer(state, { type, payload }) {
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
    case "UPDATE_QUANTITY+":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: payload.newQuantity + 1 }
            : item
        ),
      };
    case "UPDATE_QUANTITY-":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.productId
            ? { ...item, quantity: payload.newQuantity - 1 }
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
export { CartReducer };
