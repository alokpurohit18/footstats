import React from "react";
import NavBar from "../common/NavBar/NavBar.jsx";
import Footer from "../common/Footer/Footer.jsx";
import LandingPage from "../LandingPage/LandingPage.jsx";
import ScoresPage from "../scores/ScoresPage/ScoresPage.jsx";
import NewsPage from "../news/NewsPage/NewsPage.jsx";
import { Routes, Route } from "react-router-dom";
import DocumentPage from "../common/DocumentPage/DocumentPage.jsx";
import ContactPage from "../contacts/ContactPage/ContactPage.jsx";
import StatsPage from "../stats/StatsPage/StatsPage.jsx";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/data_scraping").then((response) =>
      response.json().then((data) => {
        console.log(data);
      })
    );
  });

  return (
    <div className="main-app-container">
      <NavBar
        pages={[
          {
            name: "Live Scores",
            link: "live_scores",
          },
          {
            name: "Statistics",
            link: "statistics",
          },
          {
            name: "News",
            link: "news",
          },
          {
            name: "Market Value",
            link: "market_value",
          },
          {
            name: "Coaches Center",
            link: "coaches_center",
          },
        ]}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="live_scores" element={<ScoresPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="statistics/*" element={<StatsPage />} />
        <Route
          path="terms_of_use"
          element={
            <DocumentPage
              heading="Terms of Use"
              source="https://drive.google.com/file/d/1d_MD_YnI78jlP6VSxkg6amj0nta4M6pW/preview"
            />
          }
        />
        <Route
          path="privacy_policy"
          element={
            <DocumentPage
              heading="Privacy Policy"
              source="https://drive.google.com/file/d/1PE_cJNH2rhSjrR2DaY2hPU1McF9VGQa5/preview"
            />
          }
        />
        <Route path="contact_us" element={<ContactPage />} />
      </Routes>

      <Footer
        pages={[
          {
            name: "Sitemap",
            link: "sitemap",
          },
          {
            name: "Terms of Use",
            link: "terms_of_use",
          },
          {
            name: "Privacy Policy",
            link: "privacy_policy",
          },
          {
            name: "Contact Us",
            link: "contact_us",
          },
        ]}
      />
    </div>
  );
}

export default App;
