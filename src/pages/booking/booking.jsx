import React from "react";
import "../../style/booking.css";
import Navigation from "../../component/navbar/Navigation";

const Booking = () => {
  return (
    <>
      <Navigation></Navigation>
      <div>
        <h1>Service Booking Form</h1>
        <p>Please select your preferred service and schedule</p>
      </div>
      <ul>
        <div class="booking-form">
          <form action="/submit-booking" method="POST">
            <li>
              <label for="name">Username:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Username"
              />
            </li>

            <li>
              <label for="service">Select Service:</label>
              <select id="service" name="service" required>
                <option value="">-- Choose a Service --</option>
                <option value="classic-haircut">
                  Classic Haircut – Rp75.000
                </option>
                <option value="skin-fade">Skin Fade – Rp85.000</option>
                <option value="beard-trim">
                  Beard Trim & Styling – Rp50.000
                </option>
                <option value="hair-spa">
                  Hair Spa & Scalp Treatment – Rp100.000
                </option>
                <option value="full-grooming">
                  Full Grooming Package – Rp180.000
                </option>
                <option value="pompadour">Pompadour Styling – Rp90.000</option>
                <option value="undercut">Undercut – Rp80.000</option>
                <option value="buzz-cut">Buzz Cut – Rp60.000</option>
                <option value="side-part">Side Part Cut – Rp75.000</option>
                <option value="executive-package">
                  Executive Look Package – Rp200.000
                </option>
              </select>
            </li>

            <li>
              <div class="barber-section">
                <div class="additional-service">
                  <label for="services">Additional Service:</label>
                  <div class="service-list">
                    <label>
                      <input type="checkbox" name="services" value="Shampoo" />
                      <span>Shampoo & Blow Dry – Rp40.000</span>
                    </label>
                    <label>
                      <input type="checkbox" name="services" value="GreyHair" />
                      <span>Grey Hair Coverage – Rp120.000</span>
                    </label>
                    <label>
                      <input type="checkbox" name="services" value="Facial" />
                      <span>Facial Treatment – Rp110.000</span>
                    </label>
                    <label>
                      <input type="checkbox" name="services" value="Eyebrow" />
                      <span>Eyebrow Shaping – Rp30.000</span>
                    </label>
                    <label>
                      <input type="checkbox" name="services" value="Shave" />
                      <span>Hot Towel Shave – Rp65.000</span>
                    </label>
                  </div>

                  <li>
                    <label for="barber">Barber:</label>
                    <div class="barber-options">
                      <label>
                        <input type="radio" name="barber" value="Henry" />
                        Henry
                      </label>
                      <label>
                        <input type="radio" name="barber" value="Bedjo" />
                        Bedjo
                      </label>
                      <label>
                        <input type="radio" name="barber" value="Peri" />
                        Peri
                      </label>
                      <label>
                        <input type="radio" name="barber" value="Iman" />
                        Iman
                      </label>
                      <label>
                        <input type="radio" name="barber" value="Arsenius" />
                        Arsenius
                      </label>
                    </div>
                  </li>

                  <li>
                    <label for="date">Booking Date:</label>
                    <input type="date" id="date" name="date" required />
                  </li>

                  <li>
                    <label for="time">Booking Time:</label>
                    <input type="time" id="time" name="time" required />
                  </li>

                  <li>
                    <label for="notes">Additional Notes:</label>
                    <textarea id="notes" name="notes" rows="3"></textarea>
                  </li>

                  <button type="submit">Submit Booking</button>
                </div>
              </div>
            </li>
          </form>
        </div>
      </ul>
    </>
  );
};

export default Booking;
