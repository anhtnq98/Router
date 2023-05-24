import React from "react";
import { useLocation } from "react-router-dom";

function About(props) {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>About</div>
    </div>
  );
}

export default About;
