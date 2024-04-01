import { Category, Question } from '@/data/questions';
import { ReloadLeft } from 'gthibaud-icons-react';
import { FC } from 'react';
import { Button } from '../../../../../../library/components/Button';
import { QuestionItem } from './Item';
import './styles.css';

interface QuestionsProps {
    questions: Question[];
    selectedCategories: Category[];
    searchString: string;
    handleResetSearch: () => void;
}

export const Questions: FC<QuestionsProps> = (props) => {
    const { questions, selectedCategories, searchString, handleResetSearch } = props;

    const categoriesFilter =
        selectedCategories.length === 0
            ? questions
            : questions.filter((question) => {
                  return selectedCategories.some((category) => question.categoryId === category.id);
              });

    const searchStringFilter =
        searchString.length === 0
            ? categoriesFilter
            : categoriesFilter.filter(
                  (category) =>
                      category.question.toLowerCase().includes(searchString.toLowerCase()) ||
                      category.answer.toLowerCase().includes(searchString.toLowerCase()),
              );

    return (
        <div className="questions-container">
            {searchStringFilter.map((question) => (
                <QuestionItem
                    key={question.id}
                    question={question}
                    searchString={searchString}
                />
            ))}
            {searchStringFilter.length === 0 && (
                <div className="no-results">
                    <p>
                        Nous n&apos;avons pas trouvé de résultats, essayez d&apos;élargir votre
                        recherche :
                    </p>
                    <Button
                        variant="text"
                        onClick={handleResetSearch}
                        endIcon={<ReloadLeft />}
                    >
                        Réinitialiser les filtres
                    </Button>
                </div>
            )}
        </div>
    );
};
