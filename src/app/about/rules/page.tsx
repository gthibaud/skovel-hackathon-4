import './styles.css';

import { Markdown } from '../../../../library/components/Markdown';

export default function Rules() {
    return (
        <main>
            <h1>Règlement</h1>
            <div className="content-container">
                <Markdown>
                    {`
## 1. Introduction

Le présent règlement a pour objet de définir les conditions dans lesquelles les épreuves de l'association sont organisées.

## 2. Conditions de participation

Pour participer à une épreuve, il est nécessaire d'être membre de l'association. Les épreuves sont ouvertes à tous les membres de l'association, sans distinction d'âge ou de sexe. Les mineurs doivent être accompagnés d'un adulte.

## 3. Inscriptions

Les inscriptions se font en ligne, sur le site de l'association. Les inscriptions sont ouvertes jusqu'à la veille de l'épreuve. Les inscriptions sont payantes et les tarifs sont indiqués sur le site de l'association.

## 4. Déroulement des épreuves

Les épreuves se déroulent sur le site de l'association, dans le respect des règles de sécurité. Les épreuves sont chronométrées et les résultats sont publiés sur le site de l'association.

## 5. Résultats

Les résultats sont publiés sur le site de l'association. Les trois premiers de chaque catégorie sont récompensés.

## 6. Sanctions

Les participants sont tenus de respecter le règlement de l'association. En cas de non-respect du règlement, des sanctions peuvent être prises à l'encontre du participant.
`}
                </Markdown>
            </div>
        </main>
    );
}
