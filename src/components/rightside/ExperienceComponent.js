import React from "react";

const ExperienceComponent = (props) => {
  return props.exps.map((ex) => {
    return (
      <div className="w3-container">
        <h5 className="w3-opacity">
          <b>{ex.title}</b>
        </h5>
        <h6 className="w3-text-teal">
          <i className="fa fa-calendar fa-fw w3-margin-right" />
          {ex.date}
          <span className="w3-tag w3-teal w3-round">
            {ex.isCurrent ? "Current" : null}
          </span>
        </h6>
        <p style={{ fontSize: 15 }}>{ex.desc}</p>
        <hr />
      </div>
    );
  });
};

export default ExperienceComponent;
