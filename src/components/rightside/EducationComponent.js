import React from "react";

const EducationComponent = (props) => {
  return props.eds.map((ed) => {
    return (
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>{ed.title}</b>
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right" />
          {ed.date}
        </h6>
        <p style={{ fontSize: 15 }}>{ed.desc}</p>
        <hr />
      </div>
    );
  });
};

export default EducationComponent;
