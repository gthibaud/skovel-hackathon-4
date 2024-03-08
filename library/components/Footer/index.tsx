import Link from 'next/link';
import './styles.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">© CapybaRun – {new Date().getFullYear()}</div>
                <div className="footer-right">
                    <a
                        href="/website-map"
                        className="hover:underline"
                    >
                        Plan du site
                    </a>
                    <Link
                        href="/legals"
                        className="hover:underline"
                    >
                        Mentions légales
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
