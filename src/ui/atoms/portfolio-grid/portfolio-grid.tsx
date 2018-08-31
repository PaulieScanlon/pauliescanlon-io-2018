import * as React from "react";

import { IPx } from "../../styles/breakpoints";
import FlexItem from "../flex-item";
import { FlexContainer } from "./styles";

interface IProps {
  dataArray: any[];
  cols: IPx;
  renderContent(props: any): React.ReactNode;
}

export class PortfolioGrid extends React.Component<IProps> {
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
