import * as React from "react";
import "antd/dist/antd.css";
import "./PlayerRatings.scss";

class PlayerRatings extends React.Component {
  render() {
    return (
      <div className="player-ratings-main">
        <h2 className="sub-heading">All Overall Ratings</h2>
        <div className="all-overall-rating">
          <div className="all-overall-container">
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>LS</div>
                  <div>{this.props.player.stats.rating_as.attack.ls}</div>
                </div>
                <div className="ant-col">
                  <div>ST</div>
                  <div>{this.props.player.stats.rating_as.attack.st}</div>
                </div>
                <div className="ant-col">
                  <div>RS</div>
                  <div>{this.props.player.stats.rating_as.attack.rs}</div>
                </div>
              </div>
            </div>
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>LW</div>
                  <div>{this.props.player.stats.rating_as.attack.lw}</div>
                </div>
                <div className="ant-col">
                  <div>LF</div>
                  <div>{this.props.player.stats.rating_as.attack.lf}</div>
                </div>
                <div className="ant-col">
                  <div>CF</div>
                  <div>{this.props.player.stats.rating_as.attack.cf}</div>
                </div>
                <div className="ant-col">
                  <div>RF</div>
                  <div>{this.props.player.stats.rating_as.attack.rf}</div>
                </div>
                <div className="ant-col">
                  <div>RW</div>
                  <div>{this.props.player.stats.rating_as.attack.rw}</div>
                </div>
              </div>
            </div>
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>LAM</div>
                  <div>{this.props.player.stats.rating_as.midfield.lam}</div>
                </div>
                <div className="ant-col">
                  <div>CAM</div>
                  <div>{this.props.player.stats.rating_as.midfield.cam}</div>
                </div>
                <div className="ant-col">
                  <div>RAM</div>
                  <div>{this.props.player.stats.rating_as.midfield.ram}</div>
                </div>
              </div>
            </div>
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>LM</div>
                  <div>{this.props.player.stats.rating_as.midfield.lm}</div>
                </div>
                <div className="ant-col">
                  <div>LCM</div>
                  <div>{this.props.player.stats.rating_as.midfield.lcm}</div>
                </div>
                <div className="ant-col">
                  <div>CM</div>
                  <div>{this.props.player.stats.rating_as.midfield.cm}</div>
                </div>
                <div className="ant-col">
                  <div>RCM</div>
                  <div>{this.props.player.stats.rating_as.midfield.rcm}</div>
                </div>
                <div className="ant-col">
                  <div>RM</div>
                  <div>{this.props.player.stats.rating_as.midfield.rm}</div>
                </div>
              </div>
            </div>
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>LWB</div>
                  <div>{this.props.player.stats.rating_as.defence.lwb}</div>
                </div>
                <div className="ant-col">
                  <div>LDM</div>
                  <div>{this.props.player.stats.rating_as.midfield.ldm}</div>
                </div>
                <div className="ant-col">
                  <div>CDM</div>
                  <div>{this.props.player.stats.rating_as.midfield.cdm}</div>
                </div>
                <div className="ant-col">
                  <div>RDM</div>
                  <div>{this.props.player.stats.rating_as.midfield.rdm}</div>
                </div>
                <div className="ant-col">
                  <div>RWB</div>
                  <div>{this.props.player.stats.rating_as.defence.rwb}</div>
                </div>
              </div>
            </div>
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>LB</div>
                  <div>{this.props.player.stats.rating_as.defence.lb}</div>
                </div>
                <div className="ant-col">
                  <div>LCB</div>
                  <div>{this.props.player.stats.rating_as.defence.lcb}</div>
                </div>
                <div className="ant-col">
                  <div>CB</div>
                  <div>{this.props.player.stats.rating_as.defence.cb}</div>
                </div>
                <div className="ant-col">
                  <div>RCB</div>
                  <div>{this.props.player.stats.rating_as.defence.rcb}</div>
                </div>
                <div className="ant-col">
                  <div>RB</div>
                  <div>{this.props.player.stats.rating_as.defence.rb}</div>
                </div>
              </div>
            </div>
            <div className="ant-row">
              <div className="ant-row row-container">
                <div className="ant-col">
                  <div>GK</div>
                  <div>{this.props.player.stats.rating_as.defence.gk}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PlayerRatings;
