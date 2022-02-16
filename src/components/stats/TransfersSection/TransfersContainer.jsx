import * as React from "react";
import "antd/dist/antd.css";
import TrasnferCard from "./TransferCard.jsx";
import transferData from "../../../api/data/transfersData.json";

class TrasnfersContainer extends React.Component {
  cardInfo;
  transferCardsIn;
  transferCardsOut;

  constructor(props) {
    super(props);
    this.cardInfo = this.props.cardInfo;
    this.transferCardsIn = [];
    this.transferCardsOut = [];
  }

  createTransferCardIn = (cardInfo) => {
    return (
      <TrasnferCard
        key={cardInfo.transfer_id}
        cardInfo={cardInfo}
        cardType="in"
        homeTeam={this.props.teamFilter}
      />
    );
  };

  createTransferCardOut = (cardInfo) => {
    return (
      <TrasnferCard
        key={cardInfo.transfer_id}
        cardInfo={cardInfo}
        cardType="out"
        homeTeam={this.props.teamFilter}
      />
    );
  };

  choseScoreItems2 = (teamFilter, teamsArray) => {
    let flag = false;
    for (let i = 0; i < teamsArray.length; i++) {
      if (teamFilter === teamsArray[i].team.team_name) {
        this.transferCardsIn = this.transferCardsIn.concat(teamsArray[i].in);
        this.transferCardsOut = this.transferCardsOut.concat(
          teamsArray[i].left
        );
        flag = true;
        break;
      }
    }
    return flag;
  };

  choseScoreItems1 = (teamFilter) => {
    this.transferCardsIn = [];
    this.transferCardsOut = [];
    if (
      !this.choseScoreItems2(teamFilter, transferData.premier_league.summer)
    ) {
      if (
        !this.choseScoreItems2(teamFilter, transferData.premier_league.winter)
      ) {
        if (
          !this.choseScoreItems2(teamFilter, transferData.bundesliga.summer)
        ) {
          if (
            !this.choseScoreItems2(teamFilter, transferData.bundesliga.winter)
          ) {
            if (
              !this.choseScoreItems2(teamFilter, transferData.la_liga.summer)
            ) {
              if (
                !this.choseScoreItems2(teamFilter, transferData.la_liga.winter)
              ) {
                if (
                  !this.choseScoreItems2(
                    teamFilter,
                    transferData.serie_a.summer
                  )
                ) {
                  if (
                    !this.choseScoreItems2(
                      teamFilter,
                      transferData.serie_a.winter
                    )
                  ) {
                    if (
                      !this.choseScoreItems2(
                        teamFilter,
                        transferData.ligue_1.summer
                      )
                    ) {
                      this.choseScoreItems2(
                        teamFilter,
                        transferData.ligue_1.winter
                      );
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  render() {
    return (
      <div className="transfers-container-main ant-row">
        {this.choseScoreItems1(this.props.teamFilter)}
        <div className="ant-col ant-col-2"></div>
        <div className="ant-col ant-col-10">
          {this.transferCardsIn.map(this.createTransferCardIn)}
        </div>
        <div className="ant-col ant-col-10">
          {this.transferCardsOut.map(this.createTransferCardOut)}
        </div>
        <div className="ant-col ant-col-2"></div>
      </div>
    );
  }
}
export default TrasnfersContainer;
