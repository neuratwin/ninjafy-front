import React from "react";
import LeftIcon from "../Components/LeftIcon";
import home from "./iconhome.png";
import git from "./icongitmerge.png";
import dashboard from "./iconDashboard.png";

const LeftIconPack = [
  { src: home, alt: "home" },
  { src: dashboard, alt: "dashboard" },
  { src: git, alt: "git" },
];

function LeftPanel() {
  return (
    <div className="bg-gray-50 h-full border-gray-600 border-r rounded-r-md py-16">
      <div className="flex-row align-center">
        {LeftIconPack.map(({ src, alt }) => (
          <div className="cursor-pointer" key={alt}>
            <LeftIcon key={alt} imageSrc={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftPanel;
