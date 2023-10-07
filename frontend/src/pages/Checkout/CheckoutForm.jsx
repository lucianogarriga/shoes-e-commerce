import React from "react";

const CheckoutForm = () => {
  return (
    <>
        <h4 className="form-title">
          Completa el siguiente Formulario con tus datos
        </h4>
      <div className="checkout-form">
        <form className="form-container">
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Apellido:</label>
            <input type="text" placeholder="Apellido" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="nombre@mail.com" required/>
          </div>
          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input type="text" placeholder="Colón 144" required/>
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad:</label>
            <input type="text" placeholder="Córdoba Capital" required/>
          </div>
          <div className="form-group">
            <label htmlFor="payment">Método de Pago:</label>
            <select required>
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
