/*! Typebase.less v0.1.0 | MIT License */

import styled from 'react-emotion';

import { theme } from '../theme/';

/* Types */
interface IGProps {
  fontColour?: string;
}

/* Setup */
const font = {
  fontFamily: `Roboto, sans-serif`,
  color: theme.darkest
};

const headingFont = {
  fontFamily: `Nunito, sans-serif`,
  color: theme.darkest
};

const lis = {
  ...font,
  lineHeight: '1.5rem'
};

const headings = {
  /* Change heading typefaces here */
  ...headingFont,
  marginTop: '1.5rem',
  marginBottom: 0,
  lineHeight: '1.5rem'
};

const tables = {
  padding: 0,
  lineHeight: 33
};

/* Copy & Lists */
export const P = styled.p<IGProps>(
  {
    ...font,
    label: 'p',
    lineHeight: '1.5rem',
    marginTop: '1.5rem',
    marginBottom: 0
  },
  ({ fontColour }) => ({
    color: fontColour ? fontColour : '#000000'
  })
);

export const UL = styled.ul({
  ...font,
  label: 'ul',
  marginTop: '1.5rem',
  marginBottom: '1.5rem'
});

export const OL = styled(UL)({
  ...font,
  label: 'ol',
  marginTop: 0,
  marginBottom: 0,
  '& li': {
    ...lis
  }
});

export const LI = styled.li({
  ...lis,
  label: 'li'
});

export const BLOCKQUOTE = styled.blockquote({
  label: 'block-quote',
  lineHeight: '1.5rem',
  marginTop: '1.5rem',
  marginBottom: '1.5rem'
});

/* Headings */
export const H1 = styled.h1({
  ...headings,
  label: 'h1',
  fontSize: '4.242rem',
  lineHeight: '4.5rem',
  marginTop: '3rem'
});

export const H2 = styled.h2({
  ...headings,
  label: 'h2',
  fontSize: '2.828rem',
  lineHeight: '3rem',
  marginTop: '3rem'
});

export const H3 = styled.h3({
  ...headings,
  label: 'h3',
  fontSize: '1.414rem'
});

export const H4 = styled.h4({
  ...headings,
  label: 'h4',
  fontSize: '0.707rem'
});

export const H5 = styled.h5({
  ...headings,
  label: 'h5',
  fontSize: '0.4713333333333333rem'
});

export const H6 = styled.h6({
  ...headings,
  label: 'h6',
  fontSize: '0.3535rem'
});

/* Tables */
export const TABLE = styled.table({
  ...font,
  ...tables,
  label: 'table',
  marginTop: '1.5rem',
  borderSpacing: 0,
  borderCollapse: 'collapse'
});

export const TD = styled.td({
  ...tables,
  label: 'td'
});

export const TH = styled.th({
  ...font,
  ...tables,
  label: 'th'
});

/* Code blocks */
export const CODE = styled.code({
  label: 'code',
  verticalAlign: 'bottom'
});

/* Leading paragraph text */
export const LEAD = {
  ...font,
  label: 'lead',
  fontSize: '1.414rem'
};

/* Hug the block above you */
export const HUG = {
  label: 'hug',
  marginTop: 0
};
