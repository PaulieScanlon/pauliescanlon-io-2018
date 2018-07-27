import * as React from "react";
import { TemplateWrapper } from "../styles";

import { Intro } from "../templates/intro";
import { Portfolio } from "../templates/portfolio";

import "../globalStyles";

const Index: React.SFC = () => {
  return (
    <TemplateWrapper>
      <Intro />
      <Portfolio />
    </TemplateWrapper>
  );
};

export default Index;
