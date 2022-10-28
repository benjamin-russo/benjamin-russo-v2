import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import theme from '../theme/theme';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
