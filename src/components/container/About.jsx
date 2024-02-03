import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            TechFE provides the <br /> best{" "}
            <span className="text-Teal">Digital literacy For Free</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
             Magnitudo is a group of young passionate Digital 
Entrepreneurs commited to creating awareness and 
increased adoption of Digital literacy among 
entrepreneurs and MSMEs through innovation, dedication 
and empowerment.

          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
