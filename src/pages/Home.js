import Images from "../img/Images";
import FormInput from "../components/FormInput";
import React from "react";
import Dummy from "./Dummy";
import SwitchImage from "./SwitchImage";
import {
  useImage,
  useImageUpdate,
  useImageChange,
  useImageRef,
} from "./ProflePictureLabel";
const Home = () => {
  const values = useImage();
  const swapImage = useImageUpdate();
  const onChange = useImageChange();
  const ref = useImageRef();
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Bitch,too short!",
      label: "Full Name",
      pattern: "^[A-Za-z]{5,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "invalid email",
      label: "Email Address",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Date Of Birth",
    },
    {
      id: 4,
      name: "phoneNumber",
      type: "number",
      placeholder: "Phone Number",
      // errorMessage:"invalid number",
      label: "Phone Number",
      required: true,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="home">
      <div className="header">
        <Dummy params={"My profile"} />
        <img src={Images.notification} className="notif" alt="notification" />
        <br />
        <span>
          eshibobo{" "}
          <SwitchImage />
        </span>
      </div>
      <div className="flex">
        <h4>Edit Profile</h4>
        <div>
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
          {/* <ProflePictureLabel /> */}
          {/* <SwitchImage src ={values.image} /> */}
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <button type="submit">save</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Home;
