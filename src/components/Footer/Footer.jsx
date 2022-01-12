import * as React from "react";
import "antd/dist/antd.css";
import { combinedLogo } from "../../variables";

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
        <div className="ant-col">
          <img
            className="comined-app-logo"
            alt="Combined App Logo"
            src={combinedLogo}
          />
        </div>

        {this.pages.map(this.createNavElement)}

        <div className="ant-col">
          <img
            className="comined-app-logo"
            alt="Combined App Logo"
            src={combinedLogo}
          />
        </div>
      </div>
    );
  }
}
export default Footer;
