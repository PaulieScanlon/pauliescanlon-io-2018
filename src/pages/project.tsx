import * as React from "react";
import { TemplateWrapper } from "../ui/styles/styles";

import ProjectTemplate from "../ui/templates/project-template";
const Project: React.SFC = () => {
  return (
    <TemplateWrapper>
      {/* <AppBar /> */}
      <ProjectTemplate />
    </TemplateWrapper>
  );
};

export default Project;
