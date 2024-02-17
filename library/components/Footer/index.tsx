import Link from 'next/link';
import './styles.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">© CapyRun – {new Date().getFullYear()}</div>
                <div className="footer-right">
                    <a
                        href="mailto:hello@skovel.com"
                        className="hover:underline"
                    >
                        Contact
                    </a>
                    <Link
                        href="/"
                        className="hover:underline"
                    >
                        Terms of Service
                    </Link>
                    <a
                        href="https://skovel.com"
                        target="_blank"
                        className="hover:underline"
                    >
                        Skovel
                    </a>
                </div>
            </div>
        </footer>
    );
};
