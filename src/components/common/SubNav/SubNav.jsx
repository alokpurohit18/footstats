import * as React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.scss";

class Subnav extends React.Component {
  pages;

  constructor(props) {
    super(props);
    this.pages = this.props.pages;
    this.elementWidth = this.props.elementWidth;
  }

  createNavElement = (pageObject) => {
    return (
      <div
        key={pageObject.name}
        id={pageObject.name}
        className={"nav-element ant-col-" + this.elementWidth}
        onClick={this.props.handleNavElementClick}
      >
        <Link to={pageObject.link}>{pageObject.name}</Link>
      </div>
    );
  };

  render() {
    return (
      <div className="subnav-main ant-row">
        {this.pages.map(this.createNavElement)}
      </div>
    );
  }
}
export default Subnav;
