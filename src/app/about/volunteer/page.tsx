import './styles.css';

import { ArrowRight } from 'gthibaud-icons-react';
import Link from 'next/link';
import { Button } from '../../../../library/components/Button';
import { CardText } from '../../../../library/components/CardText';
import { Markdown } from '../../../../library/components/Markdown';
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
            <CardText>
                <Markdown>
                    {`
## La CapybaRun 2024 a besoin de vous !

![L'équipe des bénévoles 2023](/medias/volunteers.jpg)

La CapybaRun 2024 est organisée par l'association Capyland. Pour que la course soit une réussite, l'association a besoin de bénévoles pour :

- Organiser la course

- Animer le village de la course

- Assurer la sécurité de la course

- Gérer la logistique de la course

- Assurer la restauration

- Communiquer sur la course

Les bénévoles sont indispensables pour que la CapybaRun 2024 soit une réussite.

## Inscriptions

Pour vous inscrire en tant que bénévole, contactez l'association CapybaRun 2024 :

`}
                </Markdown>

                <Button
                    to="/contact"
                    style={{
                        width: 'fit-content',
                        margin: 'auto',
                        marginTop: '1rem',
                    }}
                >
                    Rejoingez l'équipe <ArrowRight />
                </Button>

                <Markdown>
                    {`
## Avantages

En tant que bénévole, vous bénéficiez de nombreux avantages :

- un t-shirt de l'association

- un repas offert

- une boisson offerte

- une entrée gratuite pour la course

- une réduction sur les produits de l'association

- une invitation à la soirée de clôture de la course

Venez passer un week-end inoubliable avec l'équipe de la CapybaRun 2024 !
`}
                </Markdown>
            </CardText>
            <NavigationFooter />
        </main>
    );
}
