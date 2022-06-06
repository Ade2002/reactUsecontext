const [values, setValues] = useState({
    fullname: "",
    email: "",
    birthday: "",
    phonenumber: "",
    image: Images.person,
  });
  const swapImage = (e) => {
    let newImage = URL.createObjectURL(e.target.files[0]) || Images.person;
    ref.current.src = newImage;
    setValues({ ...values, image: newImage });
  };
