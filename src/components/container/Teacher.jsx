import React from "react";
import teacher1 from "../../assets/teacher1.jpg";
import teacher2 from "../../assets/teacher2.jpg";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Are you passionate about <span className="text-Teal">sharing your expertise and knowledge </span> with a global audience? <span className="text-Teal">Join our platform </span> as an instructor and become an integral part of our community dedicated to learning and growth.
   <span className="text-Teal"> Why Teach With Us? </span>

 Global Reach: Reach learners from around the world who are eager to benefit from your insights and expertise.

Flexible Schedule: Enjoy the freedom to create and manage your courses at your own pace, fitting seamlessly into your schedule.

Innovative Tools: Leverage our state-of-the-art teaching tools and resources designed to enhance the learning experience for both you and your students.
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-2/3 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="p-4 md:w-2/3">
          <img src={teacher2} alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
