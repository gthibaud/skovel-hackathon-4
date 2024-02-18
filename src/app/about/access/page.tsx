import './styles.css';

import Link from 'next/link';
import { Card } from '../../../../library/components/Card';

export default function Access() {
    return (
        <main>
            <h1><Link href={"/about"} style={{ opacity: 0.5 }}>Informations /</Link> Accès</h1>
            <Card>
                {`
Le village de la CapyRace 2024 est situé à l'adresse suivante :

Capyland
Route de la forêt
12345 Capyville

Le village est accessible en voiture, en transports en commun et à pied. Des parkings sont disponibles à proximité du village.

## En voiture

Le village est accessible par la route de la forêt, qui relie Capyville à Capyland. Des parkings sont disponibles à proximité du village.

## En transports en commun

Le village est accessible en transports en commun. Des arrêts de bus sont situés à proximité du village.

## À pied

Le village est accessible à pied depuis Capyville. Un sentier balisé relie Capyville à Capyland.

Venez nombreux pour partager un moment sportif et festif !

`}
            </Card>
        </main>
    );
}
