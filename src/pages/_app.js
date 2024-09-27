// pages/_app.js
import '../styles/globals.css'; // Import your global styles
import Layout from '../components/Layout'; // Adjust the path according to your project structure

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
