import React from "react";

const ImageComponent = ({imgNum, position}) => {
  return (
    <>
      <div className={`image-container w-[420px] overflow-hidden image-${imgNum} ${position}`}>
        <div className={`img-${imgNum} imagepiece piece1`} />
        <div className={`img-${imgNum} imagepiece piece2`}  />
        <div className={`img-${imgNum} imagepiece piece3`}  />
        <div className={`img-${imgNum} imagepiece piece4`}  />
        <div className={`img-${imgNum} imagepiece piece5`} />
      </div>
    </>
  );
};

export default ImageComponent;
