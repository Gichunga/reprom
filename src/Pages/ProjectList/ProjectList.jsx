import React from "react";
import ProjectCard from "../Project/ProjectCard";

const ProjectList = () => {
  return (
    <div className="w-[65vw]">
      <div className="space-y-3">
        {[1, 1, 1, 1].map((item) => (
          <ProjectCard />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
