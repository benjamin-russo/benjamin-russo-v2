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
  boxShadow: {
    primary: `0 0 ${pxToRem(20)} ${pxToRem(5)} rgba(255, 227, 136, 0.4)`,
  },
  textShadow: {
    primary: `0 0 ${pxToRem(20)} rgba(255, 227, 136, 0.8)`,
  },
  fontFamily: {
    serif: 'Volkorn',
    text: 'Poppins',
  },
  fontSize: {
    titleXL: pxToRem(100),
    titleL: pxToRem(55),
    titleM: pxToRem(30),
    titleS: pxToRem(30),
    pL: pxToRem(25),
    pM: pxToRem(20),
    pS: pxToRem(18),
    p: pxToRem(15),
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extraBold: '800',
  },
};

export default theme;
