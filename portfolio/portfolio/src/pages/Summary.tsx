import React, { useEffect } from "react";
import BackgroundInfo from "../component/BackgroundInfo";
import ExpertiseAndSkills from "../component/ExpertiseAndSkills";
import WorkHistory from "../component/WorkHistory";
import Education from "../component/Education";
import CertificateAndAward from "../component/CertificateAndAward";
import Project from "../component/Project";

const Summary = () => {
  return (
    <div className="w-full flex-1">
      <BackgroundInfo />
      <div id="line" className="h-[1px] w-full my-6"></div>
      <ExpertiseAndSkills />
      <div id="line" className="h-[1px] w-full my-6"></div>
      <WorkHistory />
      <div id="line" className="h-[1px] w-full my-6"></div>
      <Education />
      <div id="line" className="h-[1px] w-full my-6"></div>
      <CertificateAndAward />
      <div id="line" className="h-[1px] w-full my-6"></div>
      <Project />
    </div>
  );
};

export default Summary;
