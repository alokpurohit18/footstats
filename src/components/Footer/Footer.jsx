import * as React from "react";
import Avatar from "@mui/material/Avatar";
import "antd/dist/antd.css";
import { appLogo, appName } from "../../variables";

class Footer extends React.Component {
  pages;

  constructor(props) {
    super(props);
    this.pages = this.props.pages;
  }

  createNavElement = (pageName) => {
    return (
      <div key={pageName} className="nav-element ant-col">
        <a href="in">{pageName}</a>
      </div>
    );
  };

  render() {
    return (
      <div className="footer-main ant-row">
        <div className="app-logo-container ant-col ant-col-1">
          <span className="app-logo">
            <Avatar alt="App Logo" src={appLogo} />
          </span>
        </div>

        <div className="app-name-container ant-col ant-col-4">
          <a href="in">Welcome to {appName}!!!</a>
        </div>

        {this.pages.map(this.createNavElement)}
      </div>
    );
  }
}
export default Footer;
