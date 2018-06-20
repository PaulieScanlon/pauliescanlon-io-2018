import styled from 'react-emotion';

// import { IPx } from '../../styles/breakpoints';
import { mq } from '../../styles/breakpoints';

interface IStyles {
  xs?: number;
  sm?: number;
}

export const FlexContainer = styled.div({
  label: 'flex-container',
  display: 'flex',
  flexWrap: 'wrap'
});

export const FlexItem = styled.div<IStyles>(
  {
    label: 'flex-item',
    position: 'relative',
    boxSizing: 'border-box'
  },
  ({ xs, sm }) => ({
    [mq[0]]: {
      border: '1px solid red',
      width: `calc(${100 / xs}% - ${0}px)`
    },
    [mq[1]]: {
      border: '1px solid blue',
      width: `calc(${100 / sm}% - ${0}px)`
    }
  })
);
