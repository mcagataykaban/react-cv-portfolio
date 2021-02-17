import React from "react";

const ImgLeft = () => {
  return (
    <div className="w3-display-container">
      <img
        src="https://www.w3schools.com/w3images/avatar_hat.jpg"
        style={{ width: "100%" }}
        alt="Avatar"
      />
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default ImgLeft;
