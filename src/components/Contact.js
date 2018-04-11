import React, { Component } from 'react';
import styles from './css/Contact.css';

class Contact extends Component {
  render() {
    const ContactStyle = {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      marginTop: "10em"
    }
    return (
      <div className="Contact" style={ContactStyle}>
        <img src={require(`./images/testIMG3.jpg`)} style={{maxWidth: "100%",
        height: "auto", display: "inline-block"}} alt=""/>
        <div className={"contact-wrapper"}>
          <form className="contact-form validate-form">

            <span className="contact-title">
              Feel free to contact me..
            </span>

              <input className="contact-input-name contact-info" id="name" type="text" name="name" placeholder="Name.." />

              <input className="contact-input-name contact-info" id="name" type="text" name="name" placeholder="Phone Number.." />

              <input className="contact-input-email contact-info" type="text" name="email" placeholder="Email.." />
            

            
              <textarea className="contact-input-message contact-info" name="message" placeholder="Message.."></textarea>
            

            
              <button className="contact-button">
                Submit
              </button>
            
          </form>
        </div>
      </div>

    );
  }
}

export default Contact;
