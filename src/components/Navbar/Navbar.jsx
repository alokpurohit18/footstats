import * as React from "react";
import Avatar from "@mui/material/Avatar";
import "antd/dist/antd.css";
import { appLogo, appName } from "../../variables";
import Search from "../Search/Search.jsx";
import Menu from "../Menu/Menu.jsx";
import "./Navbar.scss";

class Navbar extends React.Component {
  pages;
  settings;

  constructor(props) {
    super(props);
    this.pages = this.props.pages;
    this.settings = this.props.settings;
  }

  createNavElement = (pageName) => {
    return <div className="nav-element ant-col">{pageName}</div>;
  };

  render() {
    return (
      <div className="navbar-main ant-row">
        <div className="app-logo-container ant-col ant-col-2">
          <Avatar alt="App Logo" src={appLogo} />
        </div>

        <div className="app-name-container ant-col ant-col-4">
          Welcome to {appName}!!!
        </div>

        {this.pages.map(this.createNavElement)}

        <Search placeholder="Search"/>
      </div>
    );
  }
}
export default Navbar;
