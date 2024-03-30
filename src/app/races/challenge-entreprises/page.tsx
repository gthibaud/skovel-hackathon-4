import './styles.css';

import { CardText } from '../../../../library/components/CardText';
import { PageLayout } from '../../../../library/components/Layout/PageLayout';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';

export default function Page() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Épreuves',
                    to: '/races',
                },
                {
                    label: 'Challenge entreprises',
                },
            ]}
        >
            <CardText>
                {`
Plus d'informations à venir bientôt.
`}
            </CardText>
            <NavigationFooter />
        </PageLayout>
    );
}
