//Bootstrap:
// xs < 576
// sm > 576 < md 768
// md > 768 < 992
// lg > 992 < 1200
// xl > 1200

export interface IPx {
  xs: number;
  sm: number;
  md?: number;
  lg?: number;
  xl?: number;
}

const px = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200
};

const breakpoints = [px.xs, px.sm, px.md, px.lg];

export const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`);

// useage
// const aDiv = styled.div({
//   color: 'green',
//   [mq[0]]: {
//     color: 'gray'
//   },
//   [mq[1]]: {
//     color: 'hotpink'
//   }
// })
