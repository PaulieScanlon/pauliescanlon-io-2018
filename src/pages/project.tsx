import * as React from "react";
import { MainWrapper } from "../ui/styles/styles";

import ProjectTemplate from "../ui/templates/project-template";
const Project: React.SFC = () => {
  return (
    <MainWrapper>
      {/* <AppBar /> */}
      <ProjectTemplate />
    </MainWrapper>
  );
};

export default Project;
