import './styles.css';

import { ContactSection } from '@/components/ContactSection';
import { questions } from '@/data/questions';
import Link from 'next/link';
import { CardText } from '../../../../library/components/CardText';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';
import { SearchField } from '../../../../library/components/SearchField';
import { Question } from './components/Question';

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
        </main>
    );
}
