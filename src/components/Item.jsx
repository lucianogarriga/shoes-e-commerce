import React from "react";
import ItemCount from "./ItemCount";

const Item = () => {

  const onAdd = () => {
    console.log("Add to cart");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Primer Producto</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="item-content">
                <h3>$100</h3>
                <ItemCount stock={5} initial={1} onAdd={onAdd}/> 
              </div>
            </div>
          </div>
        </div>
        {/* <div className="column">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Segundo Producto</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="item-content">
                <h3>$200</h3>
                <ItemCount />
                <button className="btn btn-outline-primary">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card m-2">
            <div className="card-body">
              <h5 className="card-title">Tercer Producto</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="item-content">
                <h3>$300</h3>
                <ItemCount />
                <button className="btn btn-outline-primary">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Item;
