import * as React from "react";
import { MainWrapper, ContainedWidth, Section } from "../ui/styles/styles";

import IntroTemplate from "../ui/templates/intro-template";
import PortfolioTemplate from "../ui/templates/portfolio-template";
import ThreeGridTemplate from "../ui/templates/three-grid-template";

import "../ui/styles/globalStyles";

const Index: React.SFC = () => {
  return (
    <MainWrapper>
      <ContainedWidth>
        <Section>
          <IntroTemplate />
        </Section>

        <Section>
          <ThreeGridTemplate />
        </Section>

        <Section>
          <PortfolioTemplate />
        </Section>
      </ContainedWidth>
    </MainWrapper>
  );
};

export default Index;
