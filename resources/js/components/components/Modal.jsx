import React, { useState, useEffect } from 'react';

const Modal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const [isPaymentSuccessful, setPaymentSuccessful] = useState(false);
  const [isProductSelected, setProductSelected] = useState(true);

  const handleRemoveFromCart = (title) => {
    removeFromCart(title);
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const handlePayment = () => {
    // Validar si hay productos en el carrito antes de permitir el pago
    if (cartItems.length === 0) {
      setProductSelected(false);
      return;
    }

    // Realizar lógica de pago si es necesario
    // Aquí solo marcamos el pago como exitoso
    setPaymentSuccessful(true);
    setProductSelected(true);
  };

  useEffect(() => {
    // Limpiar el estado de "Pedido Exitoso" cuando se cierra la ventana modal
    if (!isOpen) {
      setPaymentSuccessful(false);
      setProductSelected(true);
    }
  }, [isOpen]);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? 'visible' : 'hidden'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>
        {cartItems.length === 0 && !isProductSelected && (
          <div className="text-red-500 mb-4">Selecciona al menos un producto</div>
        )}
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-4 flex items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex flex-col">
                <span>{item.title}</span>
                <span className="text-gray-500">${item.price}</span>
              </div>
              <button
                className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-700"
                onClick={() => handleRemoveFromCart(item.title)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Cerrar
          </button>
          <button
            className="p-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={handlePayment}
          >
            Pagar
          </button>
        </div>
        {isPaymentSuccessful && (
          <div className="mt-4 p-2 bg-green-100 text-green-800 rounded">
            Pedido Exitoso
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
