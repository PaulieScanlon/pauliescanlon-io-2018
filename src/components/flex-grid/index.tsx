import * as React from 'react';

import { IPx } from '../../styles/breakpoints';

import { FlexContainer, FlexItem } from './styles';

interface IProps {
  data: any;
  cols: IPx;
  renderContent(): React.ReactNode;
}

export class FlexGrid extends React.Component<IProps, null> {
  render() {
    const { cols, renderContent } = this.props;
    return (
      <FlexContainer>
        <FlexItem xs={cols.xs} sm={cols.sm}>
          {renderContent()}
        </FlexItem>
      </FlexContainer>
    );
  }
}
