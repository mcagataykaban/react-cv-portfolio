import React from "react";
import ContactArea from "../components/leftside/ContactArea";
import ImgLeft from "../components/leftside/ImgLeft";
import LangArea from "../components/leftside/LangArea";
import SkillsArea from "../components/leftside/SkillsArea";

const LeftSide = () => {
  const contact = {
    job: "Designer",
    CityCountry: "London, UK",
    email: "ex@mail.com",
    phone: "1224435534",
  };
  const skills = [
    { name: "Adobe Photoshop", expPerc: "90%" },
    { name: "Photography", expPerc: "80%" },
    { name: "Illustrator", expPerc: "75%" },
    { name: "Media", expPerc: "50%" },
  ];
  const langs = [
    { langName: "English", levelPerc: "100%" },
    { langName: "Spanish", levelPerc: "55%" },
    { langName: "German", levelPerc: "25%" },
  ];
  return (
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <ImgLeft />
        <div style={{ padding: "10%", paddingTop: 0 }}>
          <ContactArea contact={contact}  />
          <SkillsArea skills={skills} />
          <LangArea langs={langs} />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
