import React from "react";
import Select from "react-select";
import "./Menu.scss";

class Menu extends React.Component {
  options;
  placeholder;
  customStyles;

  constructor(props) {
    super(props);
    this.options = this.props.options;
    this.placeholder = this.props.placeholder;
    this.customStyles = {
      option: (base) => ({
        ...base,
        padding: "0.5vw",
        cursor: "pointer",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#1890ff",
          color: "white",
        },
      }),
    };
  }

  render() {
    return (
      <div className="dropdown-menu">
        <Select
          name="dropdown-menu"
          placeholder={this.placeholder}
          options={this.options}
          onChange={this.props.filterCards}
          isSearchable={true}
          styles={this.customStyles}
        />
      </div>
    );
  }
}

export default Menu;
