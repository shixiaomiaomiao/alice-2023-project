import '../styles/globals.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    console.log('MyApp');
  return <Component {...pageProps} />
}