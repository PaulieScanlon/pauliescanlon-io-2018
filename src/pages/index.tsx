import * as React from "react";
import { TemplateWrapper, ContainedWidth } from "../styles/styles";

import IntroTemplate from "../ui/templates/intro-template";
import PortfolioTemplate from "../ui/templates/portfolio-template";
import TechTop5Template from "../ui/templates/tech-top-5-template";

import "../styles/globalStyles";

const Index: React.SFC = () => {
  return (
    <TemplateWrapper>
      <ContainedWidth>
        <IntroTemplate />
        <TechTop5Template />
        <PortfolioTemplate />
      </ContainedWidth>
    </TemplateWrapper>
  );
};

export default Index;
