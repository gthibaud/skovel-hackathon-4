import './styles.css';

import { ContactSection } from '@/components/ContactSection';
import { questions } from '@/data/questions';
import { CardText } from '../../../../library/components/CardText';
import { PageLayout } from '../../../../library/components/Layout/PageLayout';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';
import { SearchField } from '../../../../library/components/SearchField';
import { Question } from './components/Question';

export default function Partners() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Informations',
                    to: '/about',
                },
                {
                    label: 'FAQ',
                },
            ]}
        >
            <SearchField
                autoFocus
                placeholder="Rechercher une information"
            />
            <CardText>
                {questions.map((question, index) => (
                    <Question
                        key={index}
                        question={question}
                    />
                ))}
            </CardText>
            <ContactSection />
            <NavigationFooter />
        </PageLayout>
    );
}
