import './styles.css';

import { ContactSection } from '@/components/ContactSection';
import Link from 'next/link';
import { Card } from '../../../../library/components/Card';
import { SearchField } from '../../../../library/components/SearchField';

export default function Partners() {
    return (
        <main>
            <h1>
                <Link
                    href={'/about'}
                    style={{ opacity: 0.5 }}
                >
                    Informations /
                </Link>{' '}
                FAQ
            </h1>
            <SearchField
                autoFocus
                placeholder="Rechercher une information"
            />
            <Card>
                {`
## Inscriptions

### Comment s'inscrire ?

Pour vous inscrire à la CapybaRun 2024, rendez-vous sur notre site internet. Vous y trouverez toutes les informations nécessaires pour vous inscrire.

### Quel est le tarif des inscriptions ?

Le tarif des inscriptions dépend de la catégorie de la course. Retrouvez toutes les informations sur notre site internet.

### Quand se terminent les inscriptions ?

Les inscriptions se terminent le 31 décembre 2023.

### Puis-je me désinscrire ?

Vous pouvez vous désinscrire jusqu'au 31 décembre 2023. Passé cette date, les inscriptions ne sont plus remboursables.

## Parcours

### Où se déroule la course ?

La course se déroule dans la forêt de Capyland. Le départ et l'arrivée se font au village de la course.

### Le parcours est-il balisé ?

Le parcours est entièrement balisé. Vous ne pouvez pas vous perdre !

### Y a-t-il des ravitaillements ?

Des ravitaillements sont prévus tout au long du parcours. Vous ne manquerez de rien !

## Résultats

### Où puis-je consulter les résultats ?

Les résultats sont publiés sur notre site internet, dans la rubrique "Résultats".

### Quand sont publiés les résultats ?

Les résultats sont publiés dans les 24 heures suivant la fin de la course.

## Bénévoles

### Comment devenir bénévole ?

Pour devenir bénévole, contactez l'association Capyland. Vous trouverez toutes les informations nécessaires sur notre site internet.

`}
            </Card>
            <ContactSection />
        </main>
    );
}
