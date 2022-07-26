import React from "react";

const experienceContent = [
  {
    year: "Feb 2021 - Jul 2021",
    position: "General Business Assistant",
    compnayName: "PT. Jagad Nusantara Energi",
    details: `West Nusa Tenggara, Indonesia`,
  },
  {
    year: "Feb 2019 - Feb 2020",
    position: "IT Project Manager",
    compnayName: "Dea Malela MIIBS",
    details: `West Nusa Tenggara, Indonesia`,
  },
  {
    year: "Oct 2018 - Feb 2019",
    position: "IT Support",
    compnayName: "Dea Malela MIIBS",
    details: `West Nusa Tenggara, Indonesia`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
