import React, { useState } from "react";
import Images from "../img/Images";
import { swapImage } from "./Home";
export default function Values() {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phonenumber: "",
    image: Images.person,
  });

  return <img src={swapImage.image} className="man" alt="person" />;
}
