import React from "react";

const CheckoutForm = () => {
  return (
    <>
      <h4 className="form-title">
        Completa el siguiente Formulario con tus datos
      </h4>
      <div className="checkout-form">
        <form className="form-container" id="main-form" method="post">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellido:</label>
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Apellido"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="nombre@mail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Colón 144"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Córdoba Capital"
              autoComplete="off"
              required
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="payment">Método de Pago:</label>
            <select id="payment" name="payment" required>
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="debitCard">Tarjeta de Débito</option>
              <option value="transfer">Transferencia</option>
              <option value="cash">Efectivo</option>
            </select>
          </div>
        </form>
      </div>
      <div className="submit-button">
        <div className="list-submit-button">
          <button type="submit" className="btn btn-primary end-button">
            Finalizar compra
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
