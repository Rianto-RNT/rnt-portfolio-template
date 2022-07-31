import React from "react";

const personalInfoContent = [
  { meta: "name", metaInfo: "Rianto" },
  // { meta: "last name", metaInfo: "RNT" },
  { meta: "Age", metaInfo: "29 Years" },
  { meta: "phone", metaInfo: "+6281315127397" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "West Nusa Tenggara" },
  { meta: "Nationality", metaInfo: "Indonesia" },
  { meta: "Email", metaInfo: "rianto.rnt@gmail.com" },
  // { meta: "Skype", metaInfo: " rianto.rnt" },
  { meta: "languages", metaInfo: "Bahasa Indonesia, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
