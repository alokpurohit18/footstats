import * as React from "react";
import "antd/dist/antd.css";
import "./CoachesCenter.scss";
import LoadAPI from "../../utils/LoadAPI.jsx";
import "./XG.scss";
import Search from "../common/Search/Search";
import playerNames from "./../../api/data/playerNames.json";

class PlayerSimilarity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sourceLink: 0,
      similarity_percent: 0,
      apiLoaded: false,
    };
  }

  setSourceLink = (link) => {
    this.setState({
      sourceLink: link,
      apiLoaded: false,
    });
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
        <div className="player-similarity-main">
          {this.state.apiLoaded ? null : (
            <LoadAPI
              url="/player_similarity_prediction"
              sourceLink={["T. Courtois", "H. Kane"]}
              setData={this.setData}
            />
          )}
          {console.log(this.state.similarity_percent + " %")}

          <Search
            id={1}
            placeholder="Search for Player 1"
            playerNames={playerNames}
            setSourceLink={this.setSourceLink}
          />

          <Search
            id={2}
            placeholder="Search for Player 2"
            playerNames={playerNames}
            setSourceLink={this.setSourceLink}
          />
        </div>
      </div>
    );
  }
}
export default PlayerSimilarity;
