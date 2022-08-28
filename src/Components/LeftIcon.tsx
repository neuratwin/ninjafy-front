import React from "react";

type ImageSrc = { imageSrc: string; alt: string };

function LeftIcon({ imageSrc, alt }: ImageSrc) {
  return (
    <div className="flex justify-center py-4 w-16 h-16 m-auto">
      <img src={imageSrc} alt={alt} />
    </div>
  );
}

export default LeftIcon;
