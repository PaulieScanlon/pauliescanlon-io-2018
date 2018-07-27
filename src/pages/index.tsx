import * as React from "react";
import { TemplateWrapper } from "../styles";

import { Home } from "../templates/home";

import "../globalStyles";

const Index: React.SFC = () => {
  return (
    <TemplateWrapper>
      <Home />
    </TemplateWrapper>
  );
};

export default Index;
