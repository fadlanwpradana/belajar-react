import React from "react";
import "../../style/contact_us.css";
import Navigation from "../../component/navbar/Navigation";

const Contactus = () => {
  return (
    <>
    <Navigation></Navigation>
      <div>
        <div class="intro">
          <h1>Contact Us</h1>

          <p>Everything you send, really helps us</p>
        </div>

        <div class="contact-form">
          <form id="form-contact" novalidate>
            <div class="grid">
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="name@domain.com"
                  required
                />
              </label>
            </div>
            <label>
              Topic:
              <select name="topic" required>
                <option value="">Choose topic</option>
                <option value="complaint">Complaint</option>
                <option value="partnership">Suggestion</option>
                <option value="partnership">Partnership</option>
              </select>
            </label>
            <label>
              Message:
              <textarea
                name="message"
                rows="4"
                placeholder="text your message..."
                required
              ></textarea>
            </label>
            <button type="submit" class="btn primary">
              Send
            </button>
            <div class="form-msg" id="msg-contact"></div>
          </form>
        </div>

        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>
            📍 Address: Jl. Ki Hajar Dewantara No.5g, Jababeka City, District.
            Cikarang, Bekasi Regency, West Java 17530
          </p>
          <p>
            📞 WhatsApp:
            <a href="https://wa.me/6285165861879" target="_blank">
              +62 851-6586-1879
            </a>
          </p>
          <p>✉️ Email: kingsmanbarbershop@gmail.com</p>
          {/* <a href="https://maps.app.goo.gl/y542xKtMk3YMgyx99"
        ><img src="media/foto toko.png" alt=""
      /></a> */}
        </div>
      </div>
    </>
  );
};

export default Contactus;
