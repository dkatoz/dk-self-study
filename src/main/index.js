import "./index.css";
import axios from "axios";
import React from "react";

function MainPageComponent() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://283e4359-bfad-485f-82f2-c69197942e15.mock.pstmn.io/products"
      )
      .then(function (result) {
        const product = result.data.products;
        console.log(product);
        setProducts(product);
      })
      .catch(function (error) {
        console.error("error발생:", error);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <div id="logo">
            <img src="images/icons/logo2.png" />
          </div>
          <div id="banner">
            <img src="images/banners/banners33.png" />
          </div>
        </div>
      </div>
      <div id="body">
        <div id="tt">
          <h1>곱구의 귀여운 사진들</h1>
        </div>
        <div id="photolist">
          {products.map(function (product, setProduct) {
            return (
              <div className="photo">
                <div>
                  <img className="img-card" src={product.imageUrl} />
                </div>

                <div className="contents">
                  <span className="poto-name">{product.name}</span>

                  <span className="poto-des">{product.zz}</span>

                  <span className="poto-age">{product.age}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}
export default MainPageComponent;
