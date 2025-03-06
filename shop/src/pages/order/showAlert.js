import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../context";
import { useNavigate } from "react-router-dom";
function ShowAlert() {
  const cart = useContext(CartContext);
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };
  useEffect(() => {
    const timeout = setTimeout(cart.hideAlert, 3000);
    return () => clearTimeout(timeout);
  }, [cart.showAlert]);
  return <div className="show-alert">{cart.showAlert}</div>;
}
export { ShowAlert };
