import './styles.css';

import Link from 'next/link';
import { Card } from '../../../../library/components/Card';

export default function Program() {
    return (
        <main>
            <h1><Link href={"/about"} style={{ opacity: 0.5 }}>Informations /</Link> Programme</h1>
            <Card>
                {`
Le programme de la CapyRace 2024 est le suivant :

- 8h : ouverture du village de la course
- 9h : début des inscriptions et retrait des dossards
- 10h : départ de la course
- 12h : remise des prix
- 13h : fin de la course

Le village de la course est ouvert à tous les participants et à leurs accompagnateurs. Vous y trouverez des stands de restauration, des animations et des espaces de détente.

La remise des prix récompensera les trois premiers de chaque catégorie. Les résultats seront publiés sur le site de l'association.

Venez nombreux pour partager un moment sportif et festif !

`}
            </Card>
        </main>
    );
}
