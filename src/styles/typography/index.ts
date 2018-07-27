import styled from "react-emotion";

import { theme } from "../theme";

/*! Typebase.less v0.1.0 | MIT License */
/* Types */
interface ITypography {
  fontColour?: string;
  fontAlign?: string;
  maxWidth?: number;
}

/* Setup */
export const font = {
  fontFamily: `Roboto, sans-serif`,
  color: theme.darkest,
  textAlign: "left",
  margin: "0 auto",
  maxWidth: "100%"
};

const headingFont = {
  fontFamily: `Nunito, sans-serif`,
  color: theme.darkest,
  textAlign: "left"
};

const lis = {
  ...font,
  lineHeight: "1.5rem"
};

const headings = {
  /* Change heading typefaces here */
  ...headingFont,
  marginTop: "1.5rem",
  marginBottom: 0,
  lineHeight: "1.5rem"
};

const tables = {
  padding: 0,
  lineHeight: 33
};

/* Copy & Lists */
export const P = styled.p<ITypography>(
  {
    ...(font as any),
    label: "p",
    lineHeight: "1.5rem",
    marginTop: "1.5rem",
    marginBottom: 0
  },
  ({ fontColour, fontAlign, maxWidth }: any) => ({
    color: fontColour ? fontColour : font.color,
    textAlign: fontAlign ? fontAlign : font.textAlign,
    width: maxWidth ? maxWidth : font.maxWidth
  })
);

export const UL = styled.ul({
  ...(font as any),
  label: "ul",
  marginTop: "1.5rem",
  marginBottom: "1.5rem"
});

export const OL = styled(UL)({
  ...(font as any),
  label: "ol",
  marginTop: 0,
  marginBottom: 0,
  "& li": {
    ...lis
  }
});

export const LI = styled.li({
  ...(lis as any),
  label: "li"
});

export const BLOCKQUOTE = styled.blockquote({
  label: "block-quote",
  lineHeight: "1.5rem",
  marginTop: "1.5rem",
  marginBottom: "1.5rem"
});

/* Headings */
export const H1 = styled.h1<ITypography>(
  {
    ...(headings as any),
    label: "h1",
    fontSize: "4.242rem",
    lineHeight: "4.5rem",
    marginTop: "3rem"
  },
  ({ fontColour, fontAlign }: any) => ({
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  })
);

export const H2 = styled.h2<ITypography>(
  {
    ...(headings as any),
    label: "h2",
    fontSize: "2.828rem",
    lineHeight: "3rem",
    marginTop: "3rem"
  },
  ({ fontColour, fontAlign }: any) => ({
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  })
);

export const H3 = styled.h3<ITypography>(
  {
    ...(headings as any),
    label: "h3",
    fontSize: "1.414rem"
  },
  ({ fontColour, fontAlign }: any) => ({
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  })
);

export const H4 = styled.h4<ITypography>(
  {
    ...(headings as any),
    label: "h4",
    fontSize: "0.707rem"
  },
  ({ fontColour, fontAlign }: any) => ({
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  })
);

export const H5 = styled.h5<ITypography>(
  {
    ...(headings as any),
    label: "h5",
    fontSize: "0.4713333333333333rem"
  },
  ({ fontColour, fontAlign }: any) => ({
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  })
);

export const H6 = styled.h6<ITypography>(
  {
    ...(headings as any),
    label: "h6",
    fontSize: "0.3535rem"
  },
  ({ fontColour, fontAlign }: any) => ({
    color: fontColour ? fontColour : headingFont.color,
    textAlign: fontAlign ? fontAlign : headingFont.textAlign
  })
);

/* Tables */
export const TABLE = styled.table({
  ...(font as any),
  ...tables,
  label: "table",
  marginTop: "1.5rem",
  borderSpacing: 0,
  borderCollapse: "collapse"
});

export const TD = styled.td({
  ...tables,
  label: "td"
});

export const TH = styled.th({
  ...(font as any),
  ...tables,
  label: "th"
});

/* Code blocks */
export const CODE = styled.code({
  label: "code",
  verticalAlign: "bottom"
});

/* Leading paragraph text */
export const LEAD = {
  ...(font as any),
  label: "lead",
  fontSize: "1.414rem"
};

/* Hug the block above you */
export const HUG = {
  label: "hug",
  marginTop: 0
};
