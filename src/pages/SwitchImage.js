import React from "react";
import { useImage } from "./ProflePictureLabel";
const SwitchImage = () => {
  const values = useImage();
  return <img src={values.image} className="man" alt="person" />;
};

export default SwitchImage;
