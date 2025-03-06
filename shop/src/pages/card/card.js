import { products } from "../../json";
import { Link } from "react-router-dom";
import "./card.css";
function Card({ categoryName }) {
  return (
    <div className="container cards-block">
      {products
        .filter((el) => el.category === categoryName)
        .map((item) => (
          <ul className="card">
            <Link to={`/${item.id}`}>
              <li style={{ display: "flex" }}>
                <img className="card-img" src={`${item.image}`} />
              </li>
            </Link>
            <li>{item.name}</li>
            <li>
              <strong>{`${item.price} грн.`}</strong>
            </li>
            <li style={{ fontSize: "12px", color: "#db4d34" }}>в наявності</li>
          </ul>
        ))}
    </div>
  );
}
export { Card };
