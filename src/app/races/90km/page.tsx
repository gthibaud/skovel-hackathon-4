import './styles.css';

import trace from '@/data/trace.json';
import Link from 'next/link';
import { Card } from '../../../../library/components/Card';
import { Map } from '../../../../library/components/Map';
import { Markdown } from '../../../../library/components/Markdown';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Page() {
    return (
        <main>
            <h1>
                <Link
                    href={'/races'}
                    style={{ opacity: 0.5 }}
                >
                    Épreuves /
                </Link>{' '}
                90 Km
            </h1>
            <Card>
                <Markdown>{`
L'épreuve reine de la CapybaRun, le 90 Km est une course d'endurance extrême. Réputée pour être l'une des courses les plus difficiles du calendrier ultra-trail mondial, la CapybaRun 90 Km est un défi pour les coureurs les plus aguerris.

## Un cadre idyllique pour un défi hors norme

Découvrez une épreuve hors du commun, regroupant le dépassement de vos limites et la difficulté technique, tout cela complété par des aléas climatiques.
Parcourez 90 Km à travers le Massif des Vosges et traversez les deux Régions des Vosges et de l’Alsace. La morphologie des Ballons des Vosges cachent des pics de difficultés et laissent découvrir un dénivelé positif de 10 000m. Cet Ultra-Trail vosgien est un parcours dynamique et visuellement passionnant ! Soyez au cœur des Vosges et laissez vous tenter par l’ultra compétition !

![Prêt pour la course la plus difficile de la saison ?](/medias/run-2.jpg)

La 90 Km, c’est une aventure humaine remplie d’émotions et d’efforts avec des larmes, des cris, de la joie et des bénévoles qui seront là pour tous les coureurs du début à la fin. Parmi les participants, certains finiront leurs épreuves et d’autres décideront de s’arrêter avec l’envie de réussir l’année suivante. Chaque participant écrit l’histoire de cette course historique qui restera gravé longtemps dans nos têtes

## Un parcours mythique

Cette course traverse les Vosges en empruntant ses chemins les plus mythiques.

![Des paysages à couper le souffle](/medias/run-1.jpeg)

Découvrez et téléchargez le parcours GPX :
`}</Markdown>
                <br />
                <Map
                    longitude={7.028784}
                    latitude={47.926232}
                    height={400}
                    zoom={8}
                    traceGpx={trace}
                />
                <br />
                <Markdown>{`
## Un défi pour les plus aguerris

Cette course est réservée aux coureurs les plus expérimentés. Elle est ouverte aux coureurs ayant déjà terminé une course de 100 miles ou plus.

![Des rencontres inoubliables](/medias/run-3.jpeg)

Alors, ferez-vous partie des moins de 40% de finisher de cette course légendaire ?
`}</Markdown>
            </Card>
            <NavigationFooter />
        </main>
    );
}
