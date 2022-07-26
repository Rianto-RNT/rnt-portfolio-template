import React from "react";

const educationContent = [
  {
    year: "Aug 2021 - Nov 2021",
    degree: "BACKEND DEVELOPMENT",
    institute: "BINAR ACADEMY",
    details: `Indonesia`,
  },
  {
    year: "Sep 2011 - Aug 2016",
    degree: "BACHELOR DEGREE - Informatics Engineering",
    institute: "AMIKOM UNIVERSITY",
    details: `Yogyakarta, Indonesia`,
  },
  {
    year: "Jul 2009 - May 2011",
    degree: "Software Engineering ",
    institute: "Vocational High School",
    details: `West Nusa Tenggara, Indonesia`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
