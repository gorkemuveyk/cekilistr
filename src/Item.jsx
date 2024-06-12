import React, { useEffect, useRef, useState } from "react";
import "./Item.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Item = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const imgShowcaseRef = useRef(null);
  const images = [
    "/img/iphone4.png",
    "/img/iphone1.png",
    "/img/iphone5.png",
    "/img/iphone3.png",
    "/img/iphone2.png",
  ];

  useEffect(() => {
    const slideImage = () => {
      const displayWidth =
        imgShowcaseRef.current.querySelector("img").clientWidth;
      imgShowcaseRef.current.style.transform = `translateX(${
        -selectedImage * displayWidth
      }px)`;
    };

    slideImage();
    window.addEventListener("resize", slideImage);

    return () => {
      window.removeEventListener("resize", slideImage);
    };
  }, [selectedImage]);

  return (
    <div className="card-wrapper mt-5 sm:mt-0">
      <div className="card">
        {/* card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase" ref={imgShowcaseRef}>
              {images.map((img, index) => (
                <img key={index} src={img} alt="shoe image" />
              ))}
            </div>
          </div>
          <div className="img-select">
            {images.map((img, index) => (
              <div className="img-item" key={index}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedImage(index);
                  }}
                  data-id={index + 1}
                >
                  <img src={img} alt="shoe image" />
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">iPhone 15 Pro Max Mavi Titanyum</h2>
          <a
            href="https://www.apple.com/shop/buy-iphone/iphone-15-pro"
            target="_blank"
            className="product-link"
          >
            Apple Mağazasından Bak
          </a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span> 4.7 (21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Eski Katılım Ücreti: <span>550 TL</span>
            </p>
            <p className="new-price">
              Yeni Katılım Ücreti: <span>70 TL</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>Ürün Hakkında: </h2>
            <p>
              Yeni iPhone 15 Pro Max'iniz. Tam istediğiniz gibi. Teşvik ediyoruz
              iPhone uyumlu herhangi bir USB-C güç adaptörünü kullanabilirsiniz.
              Yeni bir adaptöre ihtiyacınız varsa Apple güç adaptörü veya
              kulaklık satın alın.
            </p>
            <p>
              <span className="for-more"> Uyarı: </span>
              Bu ürünü satın aldığınızda, 1 kez çekilişe katılmış olacaksınız.
              Tüm çekilişlerimiz devlet güvencesi ile yapılmaktadır.
            </p>
            <ul>
              <li>
                Renk: <span>Mavi</span>
              </li>
              <li>
                Kapasite: <span>512 GB</span>
              </li>
              <li>
                Durum: <span>Sokta Var</span>
              </li>
              <li>
                Kategori: <span>Cep Telefonu</span>
              </li>
              <li>
                Teslimat: <span>Tüm Türkiye</span>
              </li>
              <li>
                Kargo Ücreti: <span>Ücretsiz</span>
              </li>
              <li>
                Maksimum Katılımcı: <span>1500</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="hidden" min="0" defaultValue="1" />
            <a type="button" href="cart-detail" className="btn">
              Sepete Ekle <i className="fas fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
