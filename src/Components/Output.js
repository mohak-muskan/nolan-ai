import React from "react";
import { OUTPUT_BG } from "../Constants/resources";
import Header from "./Header";
import Sheet from "./Sheet";


const Output = () => {
  
  return (
    <div className="">
      <Header />
      <img className="absolute z-0 aspect-video" src={OUTPUT_BG} alt="Background_image_of_a_director"></img>
      <Sheet/>
      
    </div>
  );
};

export default Output;
