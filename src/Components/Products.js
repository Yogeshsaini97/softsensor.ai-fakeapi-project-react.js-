import React, { useEffect, useState } from "react";
import "../CSSfolder/Product.css";
import Loading from "./Loading";


const Products = () => {
  const [Array, setArray] = useState([]);
  const [Loadings, setLoadings] = useState(false);

  useEffect(() => {
    fetchmydata();
  }, []);

  const fetchmydata = async () => {
    setLoadings(true);
    const data = await fetch("https://fakestoreapi.com/products");
    console.log("hi");

    const recievedArray = await data.json();
    setArray(recievedArray);
    setLoadings(false);
  };

  return (
    <>{(!Loadings)?
      <div className="row my-5 mx-5">
        {Array.map((e, i) => (
          <div className="card col-md-2 my-5 mx-5" style={{ width: "18rem" }}>
            <img className="card-img-top" src={e.image} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{e.title}</h5>
              <p className="card-text">{e.desciption}</p>
              <a href="/" className="btn btn-primary">
                Add To Cart
              </a>
            </div>
          </div>
        ))}
      </div>:<Loading/>
    }</>
  );
};

export default Products;
