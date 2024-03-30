import { Link } from '../Link';
import './styles.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">© CapybaRun – {new Date().getFullYear()}</div>
                <div className="footer-right">
                    <Link
                        to="/website-map"
                        style={{
                            color: 'white',
                        }}
                    >
                        Plan du site
                    </Link>
                    <Link
                        to="/legals"
                        style={{
                            color: 'white',
                        }}
                    >
                        Mentions légales
                    </Link>
                    <Link
                        to="https://skovel.com"
                        target="_blank"
                        style={{
                            color: 'white',
                        }}
                    >
                        Skovel
                    </Link>
                </div>
            </div>
        </footer>
    );
};
