import React from "react";
import ExperienceComponent from "../components/rightside/ExperienceComponent";
import EducationComponent from "../components/rightside/EducationComponent";
import RCard from "../components/rightside/RCard";

const RightSide = () => {
  const EXPERIENCES = [
    {
      title: "Front End Developer / w3schools.com",
      date: "Jan 2015 - ",
      isCurrent: true,
      desc:
        "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    },
    {
      title: "Web Developer / something.com",
      date: "Mar 2012 - Dec 2014",
      isCurrent: false,
      desc:
        "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    },
    {
      title: "Graphic Designer / designsomething.com",
      date: "Jun 2010 - Mar 2012",
      isCurrent: false,
      desc:
        "Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.",
    },
  ];
  const EDUCATIONS = [
    {
      title: "w3schools.com",
      date: "Forever",
      desc: "Web Development! All I need to know in one place",
    },
    {
      title: "London Business School",
      date: "2013 - 2015",
      desc: "Master Degree",
    },
    { title: "School of Coding", date: "2010 - 2013", desc: "Master Degree" },
  ];
  
  return (
    <div className="w3-twothird">
      <RCard>
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Work Experience
        </h2>
        <ExperienceComponent exps={EXPERIENCES} />
      </RCard>
      <RCard>
        <h2 className="w3-text-grey w3-padding-16">
          <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
          Education
        </h2>
        <EducationComponent eds={EDUCATIONS} />
      </RCard>
    </div>
  );
};

export default RightSide;
