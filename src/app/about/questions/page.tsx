'use client';

import './styles.css';

import { ContactSection } from '@/components/ContactSection';
import { Category, questions, questionsCategories } from '@/data/questions';
import { useState } from 'react';
import { PageLayout } from '../../../../library/components/Layout/PageLayout';
import { NavigationFooter } from '../../../../library/components/NavigationFooter';
import { SearchField } from '../../../../library/components/SearchField';
import { Categories } from './components/Categories';
import { Questions } from './components/Questions';

export default function Partners() {
    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
    const [searchString, setSearchString] = useState<string>('');

    const handleResetSearch = () => {
        setSearchString('');
        setSelectedCategories([]);
    };

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
                onChange={(e) => setSearchString(e)}
                value={searchString}
            />
            {/* <p>Cliquez sur une catégorie :</p> */}
            <Categories
                categories={questionsCategories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            {/* <p>Questions :</p> */}
            <Questions
                questions={questions}
                selectedCategories={selectedCategories}
                searchString={searchString}
                handleResetSearch={handleResetSearch}
            />
            <ContactSection />
            <NavigationFooter />
        </PageLayout>
    );
}
