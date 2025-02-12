import { products } from "../../json";
import { Link } from "react-router-dom";
import "./card.css"
function Card({ categoryName }) {
  return (
    <div className="container cards-block">
      {products
        .filter((el) => el.category === categoryName)
        .map((item) => (
          <div className="card">
            <ul>
              <li>
                <Link to={`/${item.id}`}>{item.name}</Link>
              </li>
              <li>{`${item.price} грн.`}</li>
            </ul>
            <div style={{ display: "flex" }}>
              <img className="card-img" src={`${item.image}`} />
            </div>
          </div>
        ))}
    </div>
  );
}
export { Card };
