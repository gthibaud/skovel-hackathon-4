'use client';

import { CrossCircleFill, Search } from 'gthibaud-icons-react';
import { FC, InputHTMLAttributes } from 'react';
import { Input as AriaInput, Button, SearchField, Text } from 'react-aria-components';
import './styles.css';

interface InputProps {
    placeholder?: string;
    autoFocus?: boolean;
    type: InputHTMLAttributes<HTMLInputElement>['type'];
}

export const Input: FC<InputProps> = (props) => {
    const { placeholder, autoFocus, type } = props;

    return (
        <div className="search-container">
            <Search className="search-icon" />
            <SearchField>
                <AriaInput
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                />
                <Text slot="description" />
                <Button>
                    <CrossCircleFill />
                </Button>
            </SearchField>
        </div>
    );
};
