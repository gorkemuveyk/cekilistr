import React, { useEffect, useState } from "react";

const CartDetail = () => {
  const [randomId, setRandomId] = useState("");
  useEffect(() => {
    const generateRandomId = () => Math.floor(100000 + Math.random() * 900000);
    setRandomId(generateRandomId());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center relative min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center gap-8 w-full max-w-2xl p-16 text-gray-800 bg-white rounded-3xl relative transition-all duration-300">
        <a
          href="/iphone-15-pro-max"
          className="absolute top-2 left-2 bg-blue-500 px-2 py-1 rounded text-white"
        >
          <i className="fa-solid fa-arrow-left text-sm"></i> Geri Git
        </a>
        <div className="absolute top-[-4rem] left-[-4rem] w-full h-full bg-blue-100 z-[-1] rounded-3xl shadow-lg shadow-blue-100"></div>
        <div className="title-box">
          <h1 className="text-4xl">Sepetin</h1>
          <p className="mt-2 text-lg font-bold tracking-wider">
            ID: {randomId}
          </p>
        </div>
        <div className="product-box flex justify-center gap-8">
          <div className="img-box">
            <img className="w-32" src="/img/iphone4.png" alt="vacuum" />
          </div>
          <div className="info-box">
            <h5 className="text-xl">
              iPhone 15 Pro Max Blue Titanium <br />
              (512 GB)
            </h5>
            <p className="mt-4  bg-green-500 text-white w-[90px] text-center text-sm px-4 py-1 rounded-full">
              Stokta
            </p>
            <div className="amount-box mt-8 flex gap-2">
              <div className="minus-box w-5 h-5s bg-blue-100 flex justify-center items-center  text-gray-700 cursor-pointer rounded">
                <i className="fa-solid fa-minus"></i>
              </div>
              <input
                type="number"
                readOnly
                value="1"
                min="1"
                max="1"
                className="amount w-10 text-center h-5 border border-gray-300 rounded  text-gray-800"
                id="amount"
              />
              <div className="plus-box w-5 h-5 bg-blue-100 flex justify-center items-center  text-gray-700 cursor-pointer rounded">
                <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200" />
        <div className="cost-box flex flex-col gap-8">
          <div className="flex justify-between text-xl">
            <p>Standart Paket</p>
            <p className="font-bold">Ücretsiz</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Vergi</p>
            <p className="font-bold">0</p>
          </div>
          <div className="flex justify-between text-xl">
            <p>Toplam </p>
            <p className="font-bold">70 TL</p>
          </div>
          <p className="text-blue-500 text-lg underline cursor-pointer">
            Hediye kartın veya kupon kodun var mı?
          </p>
          <span className="applied absolute bottom-24 right-0 bg-gray-800 rounded-l-full text-white px-4 py-2 opacity-0 transition-opacity duration-300">
            Promo Applied
          </span>
        </div>
        <a
          href="/checkout"
          className="Checkout-btn w-4/5 relative left-1/2 transform -translate-x-1/2 bg-blue-500 text-white py-4 text-xl rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-gray-800 hover:shadow-inner hover:shadow-gray-800 text-center"
        >
          Çekilişe Katıl
        </a>
        <div className="promo-box flex flex-col justify-center items-center gap-4 w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-20 bg-gray-800 rounded-xl text-white opacity-0 transition-all duration-300 hidden">
          <h5 className="text-2xl">Enter your promo code</h5>
          <input
            type="text"
            maxLength="6"
            id="promo"
            className="w-40 p-2 text-2xl rounded bg-white text-gray-800 outline-none"
          />
          <button className="send-promo py-1 px-3 bg-white text-gray-800 font-bold rounded cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
