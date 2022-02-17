import "./ProuductList.css";
import Product from "./Product";
import { products } from "./Data";

const ProductList = () => {
  return (
    <div className="pl">
     
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;