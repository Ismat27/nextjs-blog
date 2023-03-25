import '../styles/global.css';
import '../styles/prism-style.css';
import { SSRProvider } from 'react-bootstrap';

export default function App({ Component, pageProps }) {
    return (
        <SSRProvider>
            <Component {...pageProps} />
        </SSRProvider>
    );
}