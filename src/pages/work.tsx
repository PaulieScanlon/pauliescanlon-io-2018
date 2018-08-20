import * as React from "react";
import { TemplateWrapper } from "../styles/styles";

import { Project } from "../templates/project";

const Work: React.SFC = () => {
  return (
    <TemplateWrapper>
      {/* <AppBar /> */}
      <Project />
    </TemplateWrapper>
  );
};

export default Work;
