'use client';

import { CrossCircleFill, Search } from 'gthibaud-icons-react';
import { FC } from 'react';
import {
    Input as AriaInput,
    Button,
    SearchField as SearchFieldAria,
    Text,
} from 'react-aria-components';
import './styles.css';

interface SearchFieldProps {
    placeholder?: string;
    autoFocus?: boolean;
    onFocus?: () => void;
}

export const SearchField: FC<SearchFieldProps> = (props) => {
    const { placeholder, autoFocus, onFocus } = props;

    return (
        <div className="search-container">
            <Search className="search-icon" />
            <SearchFieldAria>
                <AriaInput
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    onFocus={onFocus}
                />
                <Text slot="description" />
                <Button>
                    <CrossCircleFill />
                </Button>
            </SearchFieldAria>
        </div>
    );
};
