import * as React from "react";
import "antd/dist/antd.css";
import "../coaches_center/CoachesCenter.scss";

class MarketValue extends React.Component {
  render() {
    return (
      <div className="market-value-main">
        <h2>Market Value Prediction</h2>
        <div className="mv-figures-container">
          <div className="ant-row">
            <div className="ant-col ant-col-3"></div>

            <div className="mv_figures ant-col ant-col-9">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/pred_vs_true.png?raw=true"
                alt="mv_vs_pmv"
              />
              <div className="mv-figure-caption">
                From the graph above, it is evident that gradient boosting
                regression yields a high accuracy. The graph between the
                predicted and true market values give us close to a "x=y" graph.
                Almost every prediction made by the model matches the true
                market value of the player.
              </div>
            </div>

            <div className="mv_figures ant-col ant-col-9">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/mv_vs_potential.png?raw=true"
                alt="mv_vs_potential"
              />
              <div className="mv-figure-caption">
                Another correlation observed in the data tracks with the overall
                rating graph. It is observed that the market value of a player
                increases sharply with an increase in the potential of the
                player, meaning the more promising a player is at a young age,
                the higher their market value. This does not mean that the
                player will turn out to be one of the best with a high market
                value at a young age, but statistically it has been the case
                more often than not.
              </div>
            </div>

            <div className="ant-col ant-col-3"></div>
          </div>

          <div className="ant-row">
            <div className="ant-col ant-col-3"></div>

            <div className="mv_figures ant-col ant-col-9">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/mv_vs_overall.png?raw=true"
                alt="mv_vs_overall"
              />
              <div className="mv-figure-caption">
                An interesting trend observed in the data is the way the market
                value of the player increases with an increase in their overall
                rating. This increase can be seen to be almost disproportionate
                as once, we hit the 80 mark, the market value skyrockets. The
                regression model used tracks this increase exceedingly well,
                capturing the features of this trend.
              </div>
            </div>

            <div className="mv_figures ant-col ant-col-9">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/mv_vs_age%20(1).png?raw=true"
                alt="mv_vs_age"
              />
              <div className="mv-figure-caption">
                Finally, we see how age plays a factor in determining market
                value. Players considered to be in their 'primes', i.e., between
                the ages 23-28, seem to command the highest market values, with
                a few outliers.
              </div>
            </div>

            <div className="ant-col ant-col-3"></div>
          </div>

          <div className="ant-row">
            <div className="ant-col ant-col-8"></div>
            <div className="mv_figures ant-col ant-col-9">
              <img
                src="https://github.com/alokpurohit18/Shoot-Off-Game/blob/master/screenshots/Screenshot%20(230).png?raw=true"
                alt="r2_scores"
              />
              <div className="mv-figure-caption">
                Comparision of R2 scores for the all the algorithms applied and
                tested on the dataset.
              </div>
            </div>
            <div className="ant-col ant-col-7"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default MarketValue;
