import * as React from "react";
import "antd/dist/antd.css";
import { appName, combinedLogo } from "../../../utils/variables.js";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  pages;

  constructor(props) {
    super(props);
    this.pages = this.props.pages;
  }

  createNavElement = (pageObject) => {
    return (
      <div key={pageObject.name} className="nav-element ant-col">
        <Link to={pageObject.link}>{pageObject.name}</Link>
      </div>
    );
  };

  render() {
    return (
      <div className="footer-main">
        <div className="footer-container ant-row">
          <div className="ant-col ant-col-4">
            <img
              className="combined-app-logo"
              alt="Combined App Logo"
              src={combinedLogo}
            />
          </div>

          <div className="ant-col ant-col-16">
            <div className="nav-container ant-row">
              {this.pages.map(this.createNavElement)}
            </div>
            <div className="copyright-container ant-row">
              <span className="copyright-info">
                {"Copyright: © " +
                  new Date().getFullYear() +
                  " " +
                  appName +
                  " Ltd. All rights reserved."}
              </span>
            </div>
          </div>

          <div className="ant-col ant-col-4">
            <img
              className="combined-app-logo"
              alt="Combined App Logo"
              src={combinedLogo}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
