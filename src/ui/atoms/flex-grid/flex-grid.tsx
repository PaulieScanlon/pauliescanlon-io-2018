import * as React from "react";

import { IPx } from "../../../styles/breakpoints";

import { FlexContainer, FlexItem } from "./styles";

interface IProps {
  dataArray: any[];
  cols: IPx;
  renderContent(props: any): React.ReactNode;
}

export class FlexGrid extends React.Component<IProps> {
  render() {
    const { cols, renderContent, dataArray } = this.props;

    const items = dataArray.map((dataItem: any, i: number) => {
      const props = {
        ...dataItem
      };
      return (
        <FlexItem key={i} xs={cols.xs} sm={cols.sm} md={cols.md}>
          {renderContent(props)}
        </FlexItem>
      );
    });

    return <FlexContainer>{items}</FlexContainer>;
  }
}
