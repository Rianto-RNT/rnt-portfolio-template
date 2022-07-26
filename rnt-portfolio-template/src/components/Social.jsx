import React from "react";

const SocialShare = [
  { iconName: "fa fa-github", link: "https://github.com/Rianto-RNT" },
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/rianto-rnt/",
  },
  {
    iconName: "fa fa-facebook",
    link: "https://web.facebook.com/ryanmorrisonsay/",
  },
  { iconName: "fa fa-twitter", link: "https://twitter.com/ryanmorrisonsay" },
  {
    iconName: "fa fa-youtube",
    link: "https://www.youtube.com/channel/UCdVjJ69-eJuxOFPvaXtV-RQ/featured",
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
