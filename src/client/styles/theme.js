import { darken } from 'polished';

const colors = {
  primary: '#5BE7C4',
  alert: '#FA5B75',
  info: '#FFD464',
  purple: '#626EEF',
  gray: ['#eee', '#ddd', '#aaa', '#888', '#555', '#333'],
  background: '#1c1c1c',
  textAlt: '#333',
  text: '#fffefe',
};

const hoverDarken = 0.1;
const activeDarken = 0.2;

const theme = {
  colors: {
    ...colors,
    hover: {
      primary: darken(hoverDarken, colors.primary),
      alert: darken(hoverDarken, colors.alert),
      info: darken(hoverDarken, colors.info),
      purple: darken(hoverDarken, colors.purple),
      gray: [
        darken(hoverDarken, colors.gray[0]),
        darken(hoverDarken, colors.gray[1]),
        darken(hoverDarken, colors.gray[2]),
      ],
    },
    active: {
      primary: darken(activeDarken, colors.primary),
      alert: darken(activeDarken, colors.alert),
      info: darken(activeDarken, colors.info),
      purple: darken(activeDarken, colors.purple),
      gray: [
        darken(activeDarken, colors.gray[0]),
        darken(activeDarken, colors.gray[1]),
        darken(activeDarken, colors.gray[2]),
      ],
    },
  },
  font: {
    heading: 'Open Sans',
    body: 'Open Sans',
  },
  button: {
    radius: '0.5em',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

export default theme;
