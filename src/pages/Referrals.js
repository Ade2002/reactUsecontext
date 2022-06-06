import React from "react";
import Dummy from "./Dummy";

import SwitchImage from "./SwitchImage";
const Referrals = () => {
  return (
    <div className="charts">
      <Dummy params={"referrals"} />
      {/* <Values src={values.images} /> */}
       <SwitchImage />
    </div>
  );
};

export default Referrals;
