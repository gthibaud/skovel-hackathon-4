import './styles.css';

import { BecomePartner } from '@/components/BecomePartner';
import { partners, partnersCategories } from '@/data/partners';
import Image from 'next/image';
import Link from 'next/link';
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
                                <a
                                    href={partner.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="container"
                                    key={index}
                                >
                                    <Card className="card">
                                        <Image
                                            className="logo"
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={200}
                                            height={100}
                                        />
                                        <p className="name">{partner.name}</p>
                                        <p className="summary">{partner.summary}</p>
                                    </Card>
                                </a>
                            ))}
                    </div>
                </div>
            ))}
            <BecomePartner />
            <NavigationFooter />
        </main>
    );
}
