import * as React from "react";
import "antd/dist/antd.css";
import ContactCard from "../ContactCard/ContactCard.jsx";
import contactsData from "../../contactsData.json";

class ContactPage extends React.Component {
  contactsData1;
  contactsData2;

  constructor() {
    super();
    this.contactsData1 = [];
    this.contactsData2 = [];
  }

  createNewsCard = (cardInfo) => {
    return <ContactCard key={cardInfo.key} cardInfo={cardInfo} />;
  };

  splitContactsArray = () => {
    let contacts = contactsData;
    for (let i = 0; i < Math.trunc(contacts.length / 2); i++) {
      this.contactsData1[i] = contacts[i];
    }

    for (let j = Math.trunc(contacts.length / 2); j < contacts.length; j++) {
      this.contactsData2[j] = contacts[j];
    }
  };

  render() {
    return (
      <div className="contact-page-main">
        <h2>Contact Us</h2>
        {this.splitContactsArray()}
        <div className="ant-row">
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
