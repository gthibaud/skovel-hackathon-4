import './styles.css';

import { CardText } from '../../../../library/components/CardText';
import { PageLayout } from '../../../../library/components/Layout/PageLayout';
import { Map } from '../../../../library/components/Map';
import { Markdown } from '../../../../library/components/Markdown';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Access() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Informations',
                    to: '/about',
                },
                {
                    label: 'Accès',
                },
            ]}
        >
            <CardText>
                <Markdown>{`
Le village de la CapybaRun 2024 est situé à l'adresse suivante : 33 rue du Markstein, Route de la forêt, 68 830 Oderen.
`}</Markdown>
                <br />
                <Map
                    longitude={7.028784}
                    latitude={47.926232}
                    zoom={12}
                />
                <br />
                <Markdown>{`
Le village est accessible en voiture, en transports en commun et à pied. Des parkings sont disponibles à proximité du village.

## En voiture

Le village est accessible par la route départementale 123. Des parkings sont disponibles à proximité du village.

## En transports en commun

Le village est accessible en transports en commun. Vous pouvez emprunter les bus 123, 456 et 789 depuis la gare de Gebwiller. Ces bus passent tous par l'arrêt CapyMarket (le plus proche du village). Plus d'informations sur les horaires et les tarifs sur le site de la [compagnie de transports en commun](https://www.capybus.fr).

## À pied ou à vélo

Le village est accessible à pied ou à vélo. Attention toutefois, la montée peut être difficile pour les personnes non entraînées (11Km et +800m de dénivelé positif depuis Guebwiller).

## Covoiturage

La CapybaRun encourage les mobilités douces et notamment le covoiturage ! N'hésitez pas à visiter la plateforme [CapyCovoit](https://www.capy-covoit.fr) pour trouver ou proposer un trajet.

`}</Markdown>
            </CardText>
            <NavigationFooter />
        </PageLayout>
    );
}
