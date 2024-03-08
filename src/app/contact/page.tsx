import { contact } from '@/data/contact';
import Link from 'next/link';
import { Card } from '../../../library/components/Card';
import './styles.css';

export default function Contact() {
    const formatType = (type: string) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
    };

    return (
        <main>
            <h1>Contact</h1>
            <p>
                Vous n&apos;avez pas trouvé la réponse à votre question sur la page{' '}
                <Link href="about/questions">FAQ</Link> ? Envoyez-nous un email ou contactez-nous
                via les réseaux sociaux :
            </p>
            <div className="contact-links">
                {contact.map((item) => (
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.id}
                    >
                        <Card
                            className="container"
                            key={item.id}
                        >
                            {item.icon}
                            <p className="name">{formatType(item.type)}</p>
                        </Card>
                    </a>
                ))}
            </div>
            <p>Vous pouvez également nous écrire à l&apos;adresse postale suivante :</p>
            <p>
                Association CapybaRun
                <br />
                12 rue des Capybaras
                <br />
                75000 Paris
            </p>
        </main>
    );
}
