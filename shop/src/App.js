import "./App.css";
import { Main } from "./pages/main-page/main";
import { AboutUs } from "./pages/about-us/aboutUs";
import { Category } from "./pages/category/category";
import { Card } from "./pages/card/card";
import { category } from "./pages/category/category";
import { DetailsProduct } from "./pages/details-product/details";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Order } from "./pages/order/order";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import { NotFound } from "./pages/notFound/notFound";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="assortment" element={<Category />}>
          {category.map((item) => (
            <>
              <Route path={`${item}`} element={<Card categoryName={item} />} />
            </>
          ))}
        </Route>
        <Route path="/:productId" element={<DetailsProduct />} />
        <Route path="order" element={<Order />} />
        <Route path="*" element={<Main /> } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
