import * as React from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.scss";

class Subnav extends React.Component {
  pages;

  constructor(props) {
    super(props);
    this.pages = this.props.pages;
  }

  handleNavElementClick = (selectedElement) => {
    let pageObject = {};
    for (let i = 0; i < this.pages.length; i++) {
      pageObject = this.pages[i];
      let element = document.querySelector(
        "#" + CSS.escape(pageObject.name) + " a"
      );
      if (pageObject.name === selectedElement.target.innerHTML) {
        element.style.backgroundColor = "whitesmoke";
        element.style.color = "black";
      } else {
        element.style.backgroundColor = "black";
        element.style.color = "whitesmoke";
      }
    }
  };

  createNavElement = (pageObject) => {
    return (
      <div
        key={pageObject.name}
        id={pageObject.name}
        className="nav-element ant-col-4"
        onClick={this.handleNavElementClick}
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
