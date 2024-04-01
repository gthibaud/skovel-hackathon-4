'use client';

import { CrossCircleFill } from 'gthibaud-icons-react/lib/components/CrossCircleFill';
import { Search } from 'gthibaud-icons-react/lib/components/Search';
import { FC } from 'react';
import {
    Input as AriaInput,
    Button,
    SearchField as SearchFieldAria,
    Text,
} from 'react-aria-components';
import { Link } from '../Link';
import './styles.css';

interface SearchFieldProps {
    placeholder?: string;
    autoFocus?: boolean;
    onFocus?: () => void;
    mode?: 'search' | 'button';
    to?: string;
}

export const SearchField: FC<SearchFieldProps> = (props) => {
    const { placeholder, autoFocus, onFocus, mode = 'search', to } = props;

    const wrapLink = (children: any) => {
        return to ? (
            <Link
                to={to}
                className="search-link"
            >
                {children}
            </Link>
        ) : (
            children
        );
    };

    return wrapLink(
        <div className="search-container">
            <Search className="search-icon" />
            <SearchFieldAria>
                <AriaInput
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    onFocus={onFocus}
                    disabled={mode === 'button'}
                    className={`search-field-${mode}`}
                />
                <Text slot="description" />
                <Button>
                    <CrossCircleFill />
                </Button>
            </SearchFieldAria>
        </div>,
    );
};
