import { products } from "../../json";
import { useNavigate, useParams } from "react-router-dom";
import "./details.css"
//import { products } from "../../json";

function DetailsProduct() {
  const { productId } = useParams();
let navigate=useNavigate()
const handleClick=()=>{
  navigate(-1)

}

  return (
    <div className="container">
      {products
        .filter((it) => productId == it.id)
        .map((el) => (
          <div className="details-card">
            <ul
              style={{
                display: "flex",
                fontSize: "1.5em",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <li>
                <img onClick={handleClick} width="40px" src="/image/left.png" />
              </li>
              <li>{el.name}</li>
              <li>{el.size}</li>
              <li>{`${el.price} грн.`}</li>
            </ul>
            <div style={{ display: "flex" }}>
              <img width="100%" src={el.image} />
            </div>
          </div>
        ))}
    </div>
  );
}
export { DetailsProduct };
