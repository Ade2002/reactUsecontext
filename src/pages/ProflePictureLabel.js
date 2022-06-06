import React, { useState, useRef, useContext } from "react";
import Images from "../img/Images";

const imageContext = React.createContext();
const imageUpdateContext = React.createContext();
const imageChangeContext = React.createContext();
const imageRefContext = React.createContext();
export const useImage = () => {
  return useContext(imageContext);
};
export const useImageUpdate = () => {
  return useContext(imageUpdateContext);
};
export const useImageChange = () => {
  return useContext(imageChangeContext);
};
export const useImageRef = () => {
  return useContext(imageRefContext);
};

export const ProflePictureLabel = ({ children }) => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phonenumber: "",
    image: Images.person,
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const ref = useRef();
  const swapImage = (e) => {
    let newImage = URL.createObjectURL(e.target.files[0]) || Images.person;
    ref.current.src = newImage;
    setValues({
      ...values,
      image: newImage,
    });
  };
  return (
    <imageContext.Provider value={values}>
      <imageUpdateContext.Provider value={swapImage}>
        <imageChangeContext.Provider value={onChange}>
          <imageRefContext.Provider value={ref}>
            {children}
            {/* <label htmlFor="image">
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
    import { themeprovider } from './themecontext*/}
          </imageRefContext.Provider>
        </imageChangeContext.Provider>
      </imageUpdateContext.Provider>
    </imageContext.Provider>
  );
};
