import * as React from "react";
import { TemplateWrapper } from "../styles/styles";

import { Intro } from "../templates/intro";
import { Portfolio } from "../templates/portfolio";
import { Skills } from "../templates/skills";

import "../styles/globalStyles";

const Index: React.SFC = () => {
  return (
    <TemplateWrapper>
      <Intro />
      <Portfolio />
      <Skills />
    </TemplateWrapper>
  );
};

export default Index;
