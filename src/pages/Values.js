import React, { useState, useRef } from "react";
import Images from "../img/Images";

const Values = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phonenumber: "",
    image: Images.person,
  });
  const ref = useRef();
  const swapImage = (e) => {
    let newImage = URL.createObjectURL(e.target.files[0]) || Images.person;
    ref.current.src = newImage;
    setValues({ ...values, image: newImage });
  };
};

export default Values;
