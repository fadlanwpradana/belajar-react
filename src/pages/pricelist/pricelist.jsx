import React from "react";
import "../../style/pricelist.css";

import Navigation from "../../component/navbar/Navigation";


const Pricelist = () => {
  return (
    <>
        <Navigation></Navigation>
      <div>
        <div class="price-list">
          <h1>Service List</h1>

          <p>Explore our grooming services and rates:</p>

          <ol class="service-order">
            <li>Classic Haircut</li>
            <li>Skin Fade</li>
            <li>Beard Trim & Styling</li>
            <li>Hair Spa & Scalp Treatment</li>
            <li>Full Grooming Package</li>
            <li>Pompadour Styling</li>
            <li>Undercut</li>
            <li>Buzz Cut</li>
            <li>Side Part Cut</li>
            <li>Executive Look Package</li>
          </ol>

          <div class="price-list">
            <h2>Service Price List</h2>

            <p>Explore our price list and get the treatment you deserve:</p>
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Price (Rp)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classic Haircut</td>
                  <td>75.000</td>
                </tr>
                <tr>
                  <td>Skin Fade</td>
                  <td>85.000</td>
                </tr>
                <tr>
                  <td>Beard Trim & Styling</td>
                  <td>50.000</td>
                </tr>
                <tr>
                  <td>Hair Spa & Scalp Treatment</td>
                  <td>100.000</td>
                </tr>
                <tr>
                  <td>Full Grooming Package</td>
                  <td>180.000</td>
                </tr>
                <tr>
                  <td>Pompadour Styling</td>
                  <td>90.000</td>
                </tr>
                <tr>
                  <td>Undercut</td>
                  <td>80.000</td>
                </tr>
                <tr>
                  <td>Buzz Cut</td>
                  <td>60.000</td>
                </tr>
                <tr>
                  <td>Side Part Cut</td>
                  <td>75.000</td>
                </tr>
                <tr>
                  <td>Executive Look Package</td>
                  <td>200.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricelist;
