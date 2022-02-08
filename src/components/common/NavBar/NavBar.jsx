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

        <Search placeholder="Search" searchIcon="🔍" />
      </div>
    );
  }
}
export default Navbar;
