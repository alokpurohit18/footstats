import * as React from "react";
import "antd/dist/antd.css";
import ContactCard from "../ContactCard/ContactCard.jsx";

class ContactPage extends React.Component {
  contactsData1;
  contactsData2;

  createNewsCard = (cardInfo) => {
    return <ContactCard key={cardInfo.key} cardInfo={cardInfo} />;
  };

  splitContactsData = () => {
    this.contactsData2 = this.props.contactsData;
    this.contactsData1 = this.props.contactsData.splice(
      0,
      Math.trunc(this.props.contactsData.length / 2)
    );
  };

  render() {
    return (
      <div className="contact-page-main">
        <h2>Contact Us</h2>
        <div className="ant-row">
          {this.splitContactsData()}
          <div className="ant-col ant-col-2"></div>
          <div className="ant-col ant-col-10">
            {this.contactsData1.map(this.createNewsCard)}
          </div>
          <div className="ant-col ant-col-10">
            {this.contactsData2.map(this.createNewsCard)}
          </div>
          <div className="ant-col ant-col-2"></div>
        </div>
      </div>
    );
  }
}
export default ContactPage;
