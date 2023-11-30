import React, { useState, useRef, useEffect } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';

const Card = (props) => {
  const { img, title, category, price, addToCart, openCart } = props;
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBuyClick = () => {
    if (selectedSize) {
      addToCart({ title, price, size: selectedSize });
      openCart();
    } else {
      alert('POR FAVOR SELECCIONA UNA TALLA');
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-[#362C29]/50 p-6 rounded-2xl flex flex-col gap-2 w-full md:w-auto">
      <img
        src={img}
        className="w-full xl:w-52 h-72 lg:h-64 object-cover rounded-2xl cursor-pointer"
        alt={title}
        onClick={openModal}
      />
      <h1 className="text-xl text-white">{title}</h1>
      <span className="text-gray-400">{category}</span>
      <div className="flex items-center gap-4">
        <h5 className="text-3xl text-[#E58D27]">${price}</h5>
        <button
          className="bg-[#E58D27] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200"
          onClick={handleBuyClick}
        >
          Buy
        </button>
        <button
          className="hover:text-[#E58D27] transition-colors"
          onClick={() => {
            addToCart({ title, price });
            openCart();
          }}
        >
          <RiShoppingCartLine />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={modalRef} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi illum facere recusandae voluptatibus</p>
            </div>
            <img className="object-cover w-full h-48 mt-2" src={img} alt={title} />
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 className="text-lg font-bold text-white">${price}</h1>
              <div className="flex gap-2">
                <button
                  className={`px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none ${
                    selectedSize === '25' && 'bg-gray-300'
                  }`}
                  onClick={() => handleSizeSelect('25')}
                >
                  25
                </button>
                <button
                  className={`px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none ${
                    selectedSize === '26' && 'bg-gray-300'
                  }`}
                  onClick={() => handleSizeSelect('26')}
                >
                  26
                </button>
                <button
                  className={`px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none ${
                    selectedSize === '27' && 'bg-gray-300'
                  }`}
                  onClick={() => handleSizeSelect('27')}
                >
                  27
                </button>
                <button
                  className={`px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none ${
                    selectedSize === '28' && 'bg-gray-300'
                  }`}
                  onClick={() => handleSizeSelect('28')}
                >
                  28
                </button>
              </div>
              <button
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
                onClick={handleBuyClick}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
