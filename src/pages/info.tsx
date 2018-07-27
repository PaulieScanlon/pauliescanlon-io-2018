import * as React from "react";
import { TemplateWrapper } from "../styles";

import { Item } from "../templates/item";

const Info: React.SFC = () => {
  return (
    <TemplateWrapper>
      <Item />
    </TemplateWrapper>
  );
};

export default Info;
