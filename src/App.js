// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactus/contactus";
import Homepage from "./pages/homepage/homepage";
import Style from "./pages/styling/style";
import Pricelist from "./pages/pricelist/pricelist";
import Barbers from "./pages/barbers/barbers";
import Booking from "./pages/booking/booking";
import Purchasing from "./pages/purchasing/purchasing";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>test aplikasi fadlan widya pradana</p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/style" element={<Style />} />
          <Route path="/pricelist" element={<Pricelist />} />
          <Route path="/barber" element={<Barbers />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/purchasing" element={<Purchasing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
