// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./pages/contactus/contactus";
import Homepage from "./pages/homepage/homepage";
import Style from "./pages/styling/style";

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
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
