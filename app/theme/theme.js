import pxToRem from '../utils/pxToRem';

// #ECB7B7

const theme = {
  colors: {
    primary: '#000322',
    secondary: '#FFE388',
    black: '#000000',
    black80: 'rgba(0,3,34,0.8)',
    white: '#FFFFFF',
    error: 'red',
  },
  dropShadow: {
    primary: `0px 0px ${pxToRem(20)} ${pxToRem(-1)} rgba(0,0,0,0.25)`,
  },
  fontFamily: {
    title: 'Fleur De Leah',
    text: 'Cormorant Garamond',
    pagination: 'Open Sans',
  },
  fontSize: {
    titleXL: pxToRem(70),
    titleL: pxToRem(50),
    titleM: pxToRem(35),
    titleS: pxToRem(30),
    pL: pxToRem(25),
    pM: pxToRem(20),
    pS: pxToRem(18),
    p: pxToRem(15),
  },
  fontWeight: {
    light: '200',
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
};

export default theme;
