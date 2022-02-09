import * as React from "react";
import Avatar from "@mui/material/Avatar";
import "antd/dist/antd.css";
import { appLogo, appName } from "../../../utils/variables.js";
import Search from "../Search/Search.jsx";
import { Link } from "react-router-dom";
import "./NavBar.scss";

class Navbar extends React.Component {
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
      <div className="navbar-main ant-row">
        <div className="app-logo-container ant-col ant-col-1">
          <span className="app-logo">
            <Avatar alt="App Logo" src={appLogo} />
          </span>
        </div>

        <div className="app-name-container ant-col ant-col-4">
          <Link to="/">Welcome to {appName}!!!</Link>
        </div>

        {this.pages.map(this.createNavElement)}

        <div className="sponsers-container ant-col-5">
          <div className="sponsers ant-row">
            <div className="ant-col ant-col-8">Powered By:</div>
            <span className="ant-col ant-col-2"></span>
            <img
              className="espn ant-col ant-col-5"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/ESPN_wordmark.svg/2560px-ESPN_wordmark.svg.png"
              alt="espn logo"
            />
            <span className="ant-col ant-col-2"></span>
            <img
              className="sky-sport ant-col ant-col-7"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sky_Sports_logo_2017.svg/1280px-Sky_Sports_logo_2017.svg.png"
              alt="sky logo"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
