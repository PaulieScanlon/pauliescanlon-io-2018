import * as React from "react";

import { IPostData } from "../../types/data-types";

export const Thing = (props: IPostData[]) => {
  console.log("Thing props: ", props);

  return <div>Thing</div>;
};
