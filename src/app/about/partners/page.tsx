import './styles.css';

import { partners, partnersCategories } from '@/data/partners';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../../library/components/Button';
import { Card } from '../../../../library/components/Card';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Partners() {
    return (
        <main>
            <h1>
                <Link
                    href={'/about'}
                    style={{ opacity: 0.5 }}
                >
                    Informations /
                </Link>{' '}
                Partenaires
            </h1>
            <Card>
                L&apos;organisation de la CapybaRun remercie chaleureusement l&apos;ensemble de ses
                partenaires qui permettent à chacun de profiter d&apos;un évènement exceptionnel.
            </Card>
            {partnersCategories.map((category, index) => (
                <div
                    key={index}
                    className="partners-categories"
                >
                    <h2>{category.name}</h2>
                    <p>{category.summary}</p>
                    <div className="partners-section">
                        {partners
                            .filter((partner) => partner.categoryId === category.id)
                            .map((partner, index) => (
                                <Card
                                    className="container"
                                    key={index}
                                >
                                    <a
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            className="logo"
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={200}
                                            height={100}
                                        />
                                    </a>
                                    <p className="name">{partner.name}</p>
                                    <p className="summary">{partner.summary}</p>
                                </Card>
                            ))}
                    </div>
                </div>
            ))}
            <Card>
                <span>
                    Vous souhaitez devenir partenaire de la CapybaRun ? Contactez-nous ici :
                    <Button
                        to="/contact"
                        style={{
                            width: 'fit-content',
                            margin: 'auto',
                            marginTop: '1rem',
                        }}
                    >
                        Devenir partenaire
                    </Button>
                </span>
            </Card>
            <NavigationFooter />
        </main>
    );
}
