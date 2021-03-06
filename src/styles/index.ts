import styled from "react-emotion";
import { injectGlobal } from "react-emotion";
import { px } from "./breakpoints";
import { draculaTheme } from "./theme";

import { font } from "./typography/";

export const common = {
  padding: 20,
  header: 50,
  dropShadow:
    "rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px",
  darkenAmt: 0.01,
  lightenAmt: 0.05,
  marginBottom: 20,
  flexBottom: 60,
  hoverTransition: 0.3
};

injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  html, body {
    width: 100%;
    min-width: 320px;
    height: 100%;
    padding: 0;
    margin: 0; 
    color: ${font.color};
    font-family: ${font.fontFamily};
    background: ${draculaTheme.background};
    p {
      margin-bottom: ${common.marginBottom}px;
    }
    a:link, a:visited, a:hover, a:active {
      color: ${font.color};
      word-break: break-word;
    };
    p a:link, a:visited, a:hover, a:active {
      color: ${draculaTheme.comment}
    }
    .vimeo-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 */
      padding-top: 25px;
      height: 0;
    }

    .vimeo-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  `;

// -webkit-font-smoothing: antialiased;
// -moz-osx-font-smoothing: grayscale;
// -webkit-text-stroke: 0.2px;

export const MainWrapper = styled.main({
  label: "main-wrapper",
  position: "relative",
  backgroundColor: draculaTheme.background
});

export const FullWidth = styled.div({
  label: "full-width",
  position: "relative",
  width: "100%"
});

export const ContainedWidth = styled.div({
  label: "contained-width",
  position: "relative",
  margin: `${common.header}px auto 0px auto`,
  // margin: "0 auto",
  padding: `0px ${common.padding}px 0px ${common.padding}px`,
  maxWidth: `${px.md}`,
  minHeight: 300
});

export const Section = styled.section({
  label: "section",
  position: "relative",
  display: "flex",
  flexWrap: "wrap"
});
