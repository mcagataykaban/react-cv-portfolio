import React from "react";

const RCard = (props) => {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      {props.children}
    </div>
  );
};

export default RCard;
