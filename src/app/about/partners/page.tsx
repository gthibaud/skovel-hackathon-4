import './styles.css';

import Link from 'next/link';
import { Card } from '../../../../library/components/Card';

export default function Partners() {
    return (
        <main>
            <h1><Link href={"/about"} style={{ opacity: 0.5 }}>Informations /</Link> Partenaires</h1>
            <Card>
                {`
Ils rendent la CapyRace 2024 possible !

La CapyRace 2024 est organisée par l'association Capyland. Pour que la course soit une réussite, l'association a besoin de partenaires :

- des partenaires financiers

- des partenaires logistiques

- des partenaires techniques

- des partenaires médias

Nous remercions chaleureusement nos partenaires pour leur soutien et leur engagement.

## Devenir partenaire

Pour devenir partenaire de la CapyRace 2024, contactez l'association Capyland :

- Téléphone : 01 23 45 67 89

- Email :


`}
            </Card>
        </main>
    );
}
