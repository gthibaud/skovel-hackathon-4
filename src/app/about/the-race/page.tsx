'use client';
import './styles.css';

import { PastEditionsQuickinks } from '@/components/PastEditions';
import { CardText } from '../../../../library/components/CardText';
import { PageLayout } from '../../../../library/components/Layout/PageLayout';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function TheRace() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Informations',
                    to: '/about',
                },
                {
                    label: 'La course',
                },
            ]}
        >
            <CardText>
                {`

## Une histoire de passion

La CapybaRun est née en 2022, à l'initiative de Michel Robert et Anna Montana. Tous deux passionnés de course à pied et de nature, ils avaient l'habitude d'inviter tous les ans quelques amis dans leur châlet au Markstein afin de courir sur les chemins montagneux du Grand Ballon. Après le COVID et sous l'impulsion de leur ami Jean-Pierre, ils ont décidé d'ouvrir leur événement à tous les amateurs de course à pied.

![Anna et Michel, fondateurs de la CapybaRun](/medias/michel-anna.jpg)

En quelques années, la CapybaRun est devenu un évènement incontournable du paysage du trail français. En 2023, ce sont plus de 1500 coureurs qui s'étaient donné rendez-vous pour participer à la course. 

## Nature et partage

Les valeurs de nature et de partage sont au cœur de la CapybaRun. L'association est engagée dans une démarche de développement durable, et s'efforce de minimiser l'impact de la course sur l'environnement. Chaque édition se déroule dans le respect de la nature, et qui vise à sensibiliser les participants à la protection de l'environnement. Les participants doivent désormais apporter des gourdes pour s'hydrater (les ravitaillements ne fournissent pas de gobelets jetables), et les déchets sont triés et recyclés.

![Les Vosges, un décor inoubliable](/medias/nature.jpeg)

## L'édition 2024

L'édition 2024 sera marquée par un nouveau parcours toujours plus ambitieux et exigeant. Les participants pourront profiter de panoramas exceptionnels en reliant les grands ballons des Vosges et en sillonant les crêtes. Découvrez les [parcours](/races) de chaque épreuve.

![Oserez-vous relever le défi ?](/medias/2024.jpeg)

## Sportifs ou amateurs, venez nombreux !

La CapybaRun est ouverte à tous les amateurs de course à pied, qu'ils soient sportifs aguerris ou simples amateurs. Les 3 premiers arrivés de chaque catégorie d'âge / sexe se verront remettre un trophée. Chaque participant recevra un t-shirt et une médaille à l'arrivée, offerte par nos partenaires. Tous les résultats seront consultables en live ou après la course sur notre site internet.

![Le capybara, mascotte de la CapybaRun](/medias/capybara.jpg)

`}
            </CardText>
            <div id="past-editions">
                <CardText title={'Éditions précédentes'}>
                    <p>
                        Retrouvez les résultats et médias des dernières éditions de la CapybaRun :
                    </p>
                    <br />
                    <PastEditionsQuickinks />
                </CardText>
            </div>
            <NavigationFooter />
        </PageLayout>
    );
}
