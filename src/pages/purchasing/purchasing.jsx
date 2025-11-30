import React from "react";
import "../../style/purchasing.css";
import Navigation from "../../component/navbar/Navigation";

const Purchasing = () => {
  return (
    <>
    <Navigation></Navigation>
      <div>
        <div class="purchase-container">
          <div class="intro">
            <h1 className="purchasing">Purchase Items</h1>
            <p>Choose your grooming essentials from Kingsman</p>
          </div>

          <div class="items">
            <div class="item" data-price="75000">
              <h3>Pomade</h3>
              <p>Strong hold, classic shine</p>
              <span class="price">Rp75.000</span>
              <button class="add-btn">Add to Cart</button>
            </div>

            <div class="item" data-price="50000">
              <h3>Vitamin</h3>
              <p>Hair strengthening supplement</p>
              <span class="price">Rp50.000</span>
              <button class="add-btn">Add to Cart</button>
            </div>

            <div class="item" data-price="65000">
              <h3>Shampoo</h3>
              <p>Refreshing scalp care</p>
              <span class="price">Rp65.000</span>
              <button class="add-btn">Add to Cart</button>
            </div>

            <div class="item" data-price="80000">
              <h3>Hair Tonic</h3>
              <p>Stimulates hair growth</p>
              <span class="price">Rp80.000</span>
              <button class="add-btn">Add to Cart</button>
            </div>
          </div>

          <div class="cart">
            <h2>Your Cart</h2>
            <ul id="cart-list"></ul>
            <p class="total">
              Total: <span id="total-price">Rp0</span>
            </p>
            <button id="checkout">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Purchasing;
