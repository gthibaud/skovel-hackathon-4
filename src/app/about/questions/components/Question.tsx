import { Question as QuestionType, questionsCategories } from '@/data/questions';
import { FC } from 'react';
import { Markdown } from '../../../../../library/components/Markdown';
import './styles.css';

interface QuestionProps {
    question: QuestionType;
}

export const Question: FC<QuestionProps> = (props) => {
    const { question, answer } = props.question;

    const categoryName = questionsCategories.filter(
        (category) => category.id === props.question.categoryId,
    )[0]?.name;

    return (
        <details className="question-item">
            <summary>
                <p className="question">{question}</p>
                <p className="category">{categoryName}</p>
            </summary>
            <Markdown className="answer">{answer}</Markdown>
        </details>
    );
};
