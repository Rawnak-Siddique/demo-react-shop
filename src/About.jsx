import React from "react";
import web from "../src/images/Books-reading.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact now"
      />
    </>
  );
};

export default About;
