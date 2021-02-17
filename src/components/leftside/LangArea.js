import React from "react";

const LangArea = (props) => {
  return (
    <div>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
          Languages
        </b>
      </p>
      {props.langs.map((lang) => {
        return (
          <div>
            <p>{lang.langName}</p>
            <div className="w3-light-grey w3-round-xlarge">
              <div
                className="w3-round-xlarge w3-teal"
                style={{ height: "24px", width: lang.levelPerc }}
              />
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
};

export default LangArea;
