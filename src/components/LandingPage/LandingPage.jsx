import * as React from "react";
import "antd/dist/antd.css";
import "./LandingPage.scss";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = this.props.placeholder;
    this.searchIcon = this.props.searchIcon;
  }

  printScores = () => {
    const puppeteer = require("puppeteer");
    const url = "https://www.espn.in/football/scoreboard";
    const browser = puppeteer.launch();
    const page = browser.newPage();
    page.goto(url);
    console.log("success");
  };

  render() {
    return (
      <div>
        <div>Alok</div>
        {this.printScores()}
      </div>
    );
  }
}
export default LandingPage;
