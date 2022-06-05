import React, { useState, useRef, useEffect } from "react";
import Images from "../img/Images";

const ProflePictureLabel = () => {
  return (
    <label htmlFor="image">
      <input
        type="file"
        id="image"
        style={{ display: "none" }}
        onChange={swapImage}
        accept=".png, .jpg, .jpeg, .svg"
      />
      <img src={values.image} ref={ref} className="man" alt="person" />
      <img src={Images.pencil} className="pencil" alt="pencil" />
    </label>
  );
};

export default ProflePictureLabel;
