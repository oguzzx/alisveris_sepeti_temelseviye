import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "msı anakart",
      image: "https://picsum.photos/id/0/5616/3744",
      adet: 1,
      info: "3.0ghz",
    },
    {
      id: 2,
      title: "ram",
      image: "https://picsum.photos/id/1/5616/3744",
      adet: 1,
      info: "16gb",
    },
    {
      id: 3,
      title: "ekran kartı",
      image: "https://picsum.photos/id/10/2500/1667",
      adet: 1,
      info: "1080ti",
    },
    {
      id: 4,
      title: "monitör",
      image: "https://picsum.photos/id/100/2500/1656",
      adet: 1,
      info: "msı 144hz 1ms",
    },
  ]);

  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <h1>React Sepet Uygulaması</h1>
      <h2>Listelenen Ürünler</h2>
      <div className="urunler">
        {product.map((eleman, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket];
                if (
                  arr.findIndex((ind) => {
                    return eleman.id === ind.id;
                  }) === -1
                ) {
                  arr.push(eleman);
                  setBasket(arr);
                } else {
                  arr.map((item) => {
                    if (item.id === eleman.id) {
                      return (eleman.adet += 1);
                    }
                    setBasket(arr);
                  });
                }
                console.log(basket);
              }}
              key={index}
              title={eleman.title}
              info={eleman.info}
              image={eleman.image}
            />
          );
        })}
      </div>
      <div className="sepet">
        <h2>Sepetiniz</h2>
        <ul className="sepet">
          {basket.map((eleman, index) => {
            return (
              <li>
                {eleman.title + "---->" + eleman.info + " Adet: " + eleman.adet}
              </li>
            );
          })}
        </ul>
        {basket.length > 0 ? (
          <button onClick={()=>{
            setBasket([])
          }}>Sepeti Temizle</button>
        ) : (
          <h2>Sepetinizde Ürün Bulunmamaktadır</h2>
        )}
      </div>
    </div>
  );
}

export default App;
