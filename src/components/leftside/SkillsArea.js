import React from "react";

const SkillsArea = (props) => {
  return (
    <div>
      <p className="w3-large">
        <b>
          <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
          Skills
        </b>
      </p>
      {props.skills.map((skill) => {
        return (
          <div>
            <p>{skill.name}</p>
            <div className="w3-light-grey w3-round-xlarge w3-small">
              <div
                className="w3-container w3-center w3-round-xlarge w3-teal"
                style={{ width: skill.expPerc }}
              >
                {skill.expPerc}
              </div>
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default SkillsArea;
