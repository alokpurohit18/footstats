import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";

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
          {
            name: "Terms of Use",
            link: "https://drive.google.com/file/d/1d_MD_YnI78jlP6VSxkg6amj0nta4M6pW/view?usp=sharing",
          },
          {
            name: "Privacy Policy",
            link: "https://drive.google.com/file/d/1PE_cJNH2rhSjrR2DaY2hPU1McF9VGQa5/view?usp=sharing",
          },
          {
            name: "Developer Info",
            link: "",
          },
          {
            name: "Contact Us",
            link: "",
          },
        ]}
      />
    </div>
  );
}

export default App;
