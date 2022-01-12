import React, { useEffect, useState } from "react";
import product1 from "../ressources/product1.png";
import "animate.css";
import Products from "../Products.json";
import { useParams } from "react-router-dom";

const Welcome = () => {
  const { Productname } = useParams();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    ingredients: [],
    img: "",
  });
  useEffect(() => {
    for (let i = 0; i < Products.length; i++) {
      if (Products[i].name === Productname) {
        setProduct({
          ...product,
          name: Products[i].name,
          description: Products[i].description,
          ingredients: Products[i].ingredients,
          image: Products[i].img,
        });
      }
    }
  }, [Productname, product]);
  return (
    <div className="h-full w-full flex pt-40 justify-evenly pt-60">
      <div className="pt-20">
        <h1 className="text-7xl font-semibold">{product.name}</h1>
        <h6 className="text-2xl text-left pt-10 pl-10">
          {product.description}
        </h6>
      </div>
      <div>
        <div className="h-96 w-96 bg-green-300 rounded-full z-0 flex justify-center align-center animate__animated animate__pulse animate__slower animate__infinite">
          <img className="h-96 w-80" src={product1} alt="product img" />
        </div>
      </div>
    </div>
  );
};
export default Welcome;
