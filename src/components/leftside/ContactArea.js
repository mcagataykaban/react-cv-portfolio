import React from "react";

const ContactArea = (props) => {
  
  return (
    <div>
      <p>
        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />
        {props.contact.job}
      </p>
      <p>
        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />
        {props.contact.CityCountry}
      </p>
      <p>
        <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />
        {props.contact.email}
      </p>
      <p>
        <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />
        {props.contact.phone}
      </p>
      <hr />
    </div>
  );
};

export default ContactArea;
