import './styles.css';

import Link from 'next/link';
import { Card } from '../../../../library/components/Card';

export default function TheRace() {
    return (
        <main>
            <h1><Link href={"/about"} style={{ opacity: 0.5 }}>Informations /</Link> La course</h1>
            <Card>
                {`
La CapyRace est une course de 10 km qui se déroule dans la forêt de Capyland. La course est ouverte à tous les membres de l'association, sans distinction d'âge ou de sexe. Les mineurs doivent être accompagnés d'un adulte.

La course se déroule sur un parcours balisé, dans le respect des règles de sécurité. Les participants doivent être assurés en responsabilité civile pour participer à la course. L'association décline toute responsabilité en cas d'accident.

Les résultats sont publiés sur le site de l'association. Les trois premiers de chaque catégorie sont récompensés.

Les participants autorisent l'association à utiliser leur image dans le cadre de la promotion de la course.

Le règlement de la course peut être modifié à tout moment par l'association. Les participants en seront informés par voie électronique.

La CapyRace est une course conviviale, qui se déroule dans un cadre exceptionnel. Venez nombreux pour partager un moment sportif et festif !

## Informations pratiques

- Date : 15 septembre 2024

- Lieu : forêt de Capyland

- Départ : 10h

- Tarif : 10 €

- Inscriptions : sur le site de l'association

- Contact :
    - Téléphone : 01 23 45 67 89
    - Email : 

Venez nombreux pour partager un moment sportif et festif !

## Parcours

Le parcours de la CapyRace est un parcours de 10 km, qui se déroule dans la forêt de Capyland. Le parcours est balisé et sécurisé, dans le respect des règles de sécurité.
`}
            </Card>
        </main>
    );
}
