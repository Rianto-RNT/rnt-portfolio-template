import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
  { skillClass: "p84", skillPercent: "84", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "NODE JS" },
  { skillClass: "p70", skillPercent: "70", skillName: "EXPRESS JS" },
  { skillClass: "p60", skillPercent: "60", skillName: "Mongo DB" },
  { skillClass: "p50", skillPercent: "50", skillName: "React" },
  { skillClass: "p45", skillPercent: "45", skillName: "Redux" },
  { skillClass: "p77", skillPercent: "77", skillName: "Git" },
  { skillClass: "p67", skillPercent: "67", skillName: "Figma" },
  {
    skillClass: "p80",
    skillPercent: "80",
    skillName: "Adobe Master Collection",
  },
  { skillClass: "p80", skillPercent: "80", skillName: "Scrum" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
