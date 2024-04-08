import { Question } from '@/data/questions';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { ChevronRightBold } from 'gthibaud-icons-react';
import { FC } from 'react';
import './styles.css';

interface QuestionItemProps {
    question: Question;
    searchString: string;
}

export const QuestionItem: FC<QuestionItemProps> = (props) => {
    const { question, searchString } = props;

    // Select the parts of the question that need to be highlighted on search
    const questionMatches = match(question.question, searchString, { insideWords: true });
    const questionParts = parse(question.question, questionMatches);

    // Select the parts of the answser that need to be highlighted on search
    const answerMatches = match(question.answer, searchString, { insideWords: true });
    const answerParts = parse(question.answer, answerMatches);

    const formatHighlightedParts = (parts: { text: string; highlight: boolean }[]) => {
        return parts.map((part, index) => (
            <span
                key={index}
                style={{
                    backgroundColor: part.highlight ? 'var(--colors-primary)' : 'transparent',
                    color: part.highlight ? 'white' : 'inherit',
                }}
            >
                {/* Avoid white spaces to be collapsed by React */}
                {part.text === ' ' ? '\u00A0' : part.text}
            </span>
        ));
    };

    return (
        <details
            className="question-quicklink"
            open={searchString.length > 0}
        >
            <summary>
                <p className="question">{formatHighlightedParts(questionParts)}</p>
                <ChevronRightBold className={`chevron`} />
            </summary>
            <article className="answer">{formatHighlightedParts(answerParts)}</article>
        </details>
    );
};
