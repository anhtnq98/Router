import React from "react";
import { Outlet } from "react-router-dom";

function Contact(props) {
  return (
    <div>
      <Outlet />
      {/* <div>Contact</div> */}
    </div>
  );
}

export default Contact;
