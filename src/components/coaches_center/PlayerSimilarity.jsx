import * as React from "react";
import "antd/dist/antd.css";
import "./CoachesCenter.scss";
import LoadAPI from "../../utils/LoadAPI.jsx";
import "./XG.scss";
import Search from "../common/Search/Search";
import playerNames from "./../../api/data/playerNames.json";

class PlayerSimilarity extends React.Component {
  playerNames;

  constructor(props) {
    super(props);
    this.state = {
      playerPair: ["T. Courtois", "Neymar Jr"],
      similarity_percent: 0,
      apiLoaded: false,
    };
    this.playerNames = [];
  }

  setPlayerPair = (link) => {
    if (this.playerNames.length === 2) {
      this.playerNames = [];
      this.playerNames[this.playerNames.length] = link;
      this.setState({
        playerPair: this.playerNames,
        apiLoaded: true,
      });
    } else if (this.playerNames.length === 1) {
      this.playerNames[this.playerNames.length] = link;

      document.getElementsByClassName("search-bar")[0].value = "";
      document.getElementsByClassName("search-bar")[1].value = "";

      this.setState({
        playerPair: this.playerNames,
        apiLoaded: false,
      });
    } else {
      this.playerNames[this.playerNames.length] = link;
      this.setState({
        playerPair: this.playerNames,
        apiLoaded: true,
      });
    }
  };

  setData = (player_similarity) => {
    this.setState({
      similarity_percent: player_similarity.similarity_percent,
      apiLoaded: true,
    });
  };

  render() {
    return (
      <div className="player-similarity-main">
        <h2>Prediction Similarity between Players</h2>

        {this.state.apiLoaded ? null : (
          <LoadAPI
            url="/player_similarity_prediction"
            sourceLink={this.state.playerPair}
            setData={this.setData}
          />
        )}

        <div className="model-description">
          Two players are similar if they have attributes similar to each other.
          This helps football teams replace a player if one leaves/retires. It
          also helps teams scout potential future players. However, in our
          model, by similar we mean stats skewed in a similar fashion, not
          necessarily values being similar. By that we mean, Player A can be
          similar to Player B even if he has 2x the values for shooting,
          passing, dribbling, pace, physical, defending.
        </div>

        <div className="ant-row">
          <div className="ant-col ant-col-6"></div>
          <div className="ant-col ant-col-6">
            <Search
              id={1}
              placeholder="Search for Player 1..."
              playerNames={playerNames}
              setSourceLink={this.setPlayerPair}
              callSource="player_similarity"
            />
          </div>
          <div className="ant-col ant-col-6">
            <Search
              id={2}
              placeholder="Search for Player 2..."
              playerNames={playerNames}
              setSourceLink={this.setPlayerPair}
              callSource="player_similarity"
            />
          </div>
          <div className="ant-col ant-col-6"></div>
        </div>

        {this.state.playerPair.length === 2 ? (
          <div className="similarity-result">
            {"The similarity between the players " +
              this.state.playerPair[0] +
              " and " +
              this.state.playerPair[1] +
              " is " +
              Math.round(this.state.similarity_percent * 100) / 100 +
              " %"}
          </div>
        ) : (
          <div className="similarity-result">
            {"Please select 2 players..."}
          </div>
        )}
      </div>
    );
  }
}
export default PlayerSimilarity;
