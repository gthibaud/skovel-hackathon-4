import './styles.css';

import Link from 'next/link';
import { CardText } from '../../../../library/components/CardText';
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
                Challenge entreprises
            </h1>
            <CardText>
                {`
Plus d'informations à venir bientôt.
`}
            </CardText>
            <NavigationFooter />
        </main>
    );
}
