import './styles.css';

import Link from 'next/link';
import { Card } from '../../../../library/components/Card';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Volunteer() {
    return (
        <main>
            <h1>
                <Link
                    href={'/about'}
                    style={{ opacity: 0.5 }}
                >
                    Informations /
                </Link>{' '}
                Bénévoles
            </h1>
            <Card>
                {`
La CapybaRun 2024 a besoin de vous !

La CapybaRun 2024 est organisée par l'association Capyland. Pour que la course soit une réussite, l'association a besoin :

- de bénévoles pour l'organisation de la course

- de bénévoles pour l'animation du village de la course

- de bénévoles pour la sécurité de la course

- de bénévoles pour la logistique de la course

- de bénévoles pour la restauration

- de bénévoles pour la communication

- de bénévoles pour la promotion de la course

- de bénévoles pour la gestion des inscriptions

Les bénévoles sont indispensables pour que la CapybaRun 2024 soit une réussite.

## Inscriptions

Pour vous inscrire en tant que bénévole, contactez l'association Capyland :

- Téléphone : 01 23 45 67 89

- Email :


## Avantages

En tant que bénévole, vous bénéficiez de nombreux avantages :

- un t-shirt de l'association

- un repas offert

- une boisson offerte

- une entrée gratuite pour la course

- une réduction sur les produits de l'association

- une invitation à la soirée de clôture de la course

Venez nombreux pour partager un moment sportif et festif !

`}
            </Card>
            <NavigationFooter />
        </main>
    );
}
