import * as React from "react";
import { TemplateWrapper, ContainedWidth } from "../ui/styles/styles";

import IntroTemplate from "../ui/templates/intro-template";
import PortfolioTemplate from "../ui/templates/portfolio-template";
import TechTopFiveTemplate from "../ui/templates/tech-top-five-template";

import "../ui/styles/globalStyles";

const Index: React.SFC = () => {
  return (
    <TemplateWrapper>
      <ContainedWidth>
        <IntroTemplate />
        <TechTopFiveTemplate />
        <PortfolioTemplate />
      </ContainedWidth>
    </TemplateWrapper>
  );
};

export default Index;
