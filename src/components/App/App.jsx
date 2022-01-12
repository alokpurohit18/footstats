import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";
import "./App.scss";

function App() {
  return (
    <div className="main-app-container">
      <Navbar
        pages={[
          "Live Scores",
          "Statistics",
          "News",
          "Market Value",
          "Coaches Center",
        ]}
      />
      <LandingPage />
      <Footer
        pages={[
          "Terms of Use",
          "Privacy Policy",
          "Developer Info",
          "Contact Us",
        ]}
      />
    </div>
  );
}

export default App;
