import './styles.css';

import { CardText } from '../../../../library/components/CardText';
import { PageLayout } from '../../../../library/components/Layout/PageLayout';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Program() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Informations',
                    to: '/about',
                },
                {
                    label: 'Programme',
                },
            ]}
        >
            <CardText>
                {`
La CapybaRun c'est 3 courses, mais aussi un week-end exceptionnel pour les participants tout comme leurs accompagnateurs. Venez nombreux en famille ou entre amis pour partager un moment sportif et festif !

> Attention, ce programe est provisoire, des modifications sont susceptibles d'être apportées d'ici la course. Restez informés en vous [abonnant aux actualités](/events) de la course !

## Samedi 24 août

- 6h : ouverture du village de la course et retrait des dossards ;
- 7h30 : échauffement sur la ligne de départ ;
- 8h : départ de l'épreuve des 200 km ;
- 10h : départ de l'épreuve des 90 km ;
- 11h : départ du challenge entreprises ;
- 12h : ouverture des stands de restauration ;
- 14h : animation musicale avec DJ Capy sur la grande scène ;
- 16h : arrivée des premiers coureurs du challenge entreprises ;
- 22h : animation musicale avec DJ Capy sur la grande scène ;
- Minuit : fermeture du village de la course.

## Dimanche 25 août

- 8h : ouverture du village de la course ;
- 12h : arrivée des premiers coureurs ;
- 14h : remise des prix ;
- 18h : pasta party et DJ Capy ;
- 20h : fermeture du village de la course.

Le village de la course est ouvert à tous les participants et à leurs accompagnateurs. Vous y trouverez des stands de restauration, des animations et des espaces de détente.

Des navettes gratuites sont mises à disposition pour les accompagnateurs souhaitant suivre les coureurs sur le parcours.

Les sanitaires et douches sont accessibles à tous les participants et à leurs accompagnateurs pendant les heures d'ouverture du village (samedi de 6h à minuit, dimanche de 8h à 20h).

![DJ Capy avait enflammé la piste de danse en 2023](/medias/dj-capy-2023.jpg)

Venez nombreux pour partager un moment sportif et festif !

`}
            </CardText>
            <NavigationFooter />
        </PageLayout>
    );
}
