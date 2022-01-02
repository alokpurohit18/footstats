import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
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
        settings={["Profile", "Account", "Dashboard", "Logout"]}
      />
    </div>
  );
}

export default App;
