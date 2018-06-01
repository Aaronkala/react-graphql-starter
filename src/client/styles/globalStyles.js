import { injectGlobal } from 'styled-components';
import theme from './theme';
import '../fonts/fonts.css';

/* eslint-disable */

injectGlobal`
  /* CSS RESET */
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
  time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section { display: block; }
  body { line-height: 1; }
  ol, ul { list-style: none; }
  blockquote, q { quotes: none; }
  blockquote:before, blockquote:after,
  q:before, q:after { content: ''; content: none; }
  table { border-collapse: collapse; border-spacing: 0; }
  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
    position: relative;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${theme.font.heading};
    color: ${theme.colors.text};
    font-weight: 400;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background-color: white;
    font-family: ${theme.font.body}, serif;
    font-weight: 400;
    line-height: 1.45;
    color: ${theme.colors.text};
  }

  button {
    color: ${theme.colors.textAlt};
  }
  
  html {
    font-size: 1.125em;
  }

  p {
    margin-bottom: 1.3em;
  }

  h1, h2, h3, h4 {
    margin: 1.414em 0 0.5em;
    font-weight: inherit;
    line-height: 1.2;
  }

  h1 {
    margin-top: 0;
    font-size: 3.998em;
  }

  h2 {font-size: 2.827em;}

  h3 {font-size: 1.999em;}

  h4 {font-size: 1.414em;}

  small, .font_small {font-size: 0.707em;}
`;
