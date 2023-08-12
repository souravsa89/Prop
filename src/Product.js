import React from "react";

function Product(props) {
  return (
    <>
      <h3>This is a product page</h3>
      <img src={props.img} alt="img"/>
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <h4>{props.price}</h4>
    </>
  );
}
export default Product;
