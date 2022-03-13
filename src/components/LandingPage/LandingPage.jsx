import * as React from "react";
import "antd/dist/antd.css";
import NewsSection from "../news/NewsSection/NewsSection.jsx";
import ScoresSection from "../scores/ScoresSection/ScoresSection.jsx";
import TransferCard from "../statistics/TransfersSection/TransferCard.jsx";
import transferData from "../../api/data/transfersData.json";
import "./LandingPage.scss";
import "../statistics/TransfersSection/TransfersSection.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page-main ant-row">
        <div className="news-section-container ant-col ant-col-8">
          <NewsSection
            sectionHeading="Latest News"
            cardCount="5"
            cardStart="0"
          />
        </div>
        <div className="scores-section-container ant-col ant-col-8">
          <ScoresSection
            sectionHeading="Latest Fixtures"
            cardCount="5"
            cardStart="0"
            leagueFilter="all"
          />
        </div>
        <div className="transfers-section-main ant-col ant-col-8">
          <h2>Latest Transfers</h2>
          <TransferCard
            key="0"
            cardInfo={transferData.premier_league.winter[3].in[0]}
            cardType="in"
            homeTeam="Manchester United"
          />
          <TransferCard
            key="1"
            cardInfo={transferData.bundesliga.winter[0].in[0]}
            cardType="in"
            homeTeam="RB Leipzig"
          />
          <TransferCard
            key="2"
            cardInfo={transferData.la_liga.winter[0].in[0]}
            cardType="in"
            homeTeam="FC Barcelona"
          />
          <TransferCard
            key="3"
            cardInfo={transferData.serie_a.winter[0].in[0]}
            cardType="in"
            homeTeam="Genoa CFC"
          />
          <TransferCard
            key="4"
            cardInfo={transferData.ligue_1.winter[2].in[0]}
            cardType="in"
            homeTeam="Olympique Lyon"
          />
        </div>
      </div>
    );
  }
}
export default LandingPage;
