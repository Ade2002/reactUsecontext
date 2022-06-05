import Images from "../img/Images";
import FormInput from "../components/FormInput";
import React, { useState, useRef, useEffect } from "react";
import Dummy from "./Dummy";
import SwitchImage from "./SwitchImage";
const Home = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phonenumber: "",
    image: Images.person,
  });

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

  const ref = useRef();
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const swapImage = (e) => {
    let newImage = URL.createObjectURL(e.target.files[0]) || Images.person;
    ref.current.src = newImage;
    setValues({ ...values, image: newImage });
  };

  return (
    <div className="home">
      <div className="header">
        <Dummy params={"My profile"} />
        <img src={Images.notification} className="notif" alt="notification" />
        <br />
        <span>
          eshibobo{" "}
          {/* <img src={values.image} className="man" alt="person" /> */}{" "}
          <SwitchImage image={values.image} />
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
