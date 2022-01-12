import React from "react";

const ProductComponent = ({ title, calories, img }) => {
  return (
    <div>
      <div>
        <img src={img} alt="component" />
      </div>
      <div>
        <p>{title}</p>
        <p>{calories}</p>
      </div>
    </div>
  );
};
export default ProductComponent;
