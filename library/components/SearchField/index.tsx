'use client';

import { CrossCircleFill } from 'gthibaud-icons-react/lib/components/CrossCircleFill';
import { Search } from 'gthibaud-icons-react/lib/components/Search';
import { FC, useEffect } from 'react';
import {
    Input as AriaInput,
    Button,
    SearchField as SearchFieldAria,
    SearchFieldProps as SearchFieldAriaProps,
    Text,
} from 'react-aria-components';
import { Link } from '../Link';
import './styles.css';

interface SearchFieldProps extends SearchFieldAriaProps {
    placeholder?: string;
    autoFocus?: boolean;
    onFocus?: () => void;
    mode?: 'search' | 'button';
    to?: string;
}

export const SearchField: FC<SearchFieldProps> = (props) => {
    const { placeholder, autoFocus, onFocus, mode = 'search', to } = props;

    // Capture control k to focus on search field
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        window.addEventListener('keydown', (e) => {
            if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
                e.preventDefault();
                const searchField = document.querySelector(
                    '.search-field-search',
                ) as HTMLInputElement;
                searchField.focus();
            }
        });
    }, []);

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
            <SearchFieldAria {...props}>
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
