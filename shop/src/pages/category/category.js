import {
  NavLink,
  useLocation,
  useMatch,
  useParams,
  useRoutes,
} from "react-router-dom";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ProductsItem } from "./products-item";

import "./category.css";
const category = ["Пшеничне", "Крафтове", "Безалкогольне", "Темне", "Світле"];

function Category() {
  return (
    <>
      <section className="first-section-category">
        <div className="container">
          <ul className="category-list">
            {category.map((item) => (
              <li className="category-item">
                <NavLink
                  className="link-category"
                  to={`${item}`}
                  exact
                  activeClassName="active-category "
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Outlet />
    </>
  );
}
export { Category, category };
