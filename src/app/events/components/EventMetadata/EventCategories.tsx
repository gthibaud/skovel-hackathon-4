/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react';
import { FC } from 'react';
import { Event } from '../../../../../library/types/Event';

interface EventCategoriesProps {
    categories: Event['categories'] | undefined;
}

export const EventCategories: FC<EventCategoriesProps> = (props) => {
    const theme = useTheme();

    const formatCategories = (categories: Event['categories'] | undefined) => {
        if (!categories || categories.length === 0) return null;

        const athletesFormatted: JSX.Element[] = [];

        categories.forEach((category) => {
            athletesFormatted
                .push
                // <Link
                //     key={category.id}
                //     to={category.getUrl()}
                //     css={{
                //         display: 'flex',
                //         alignItems: 'center',
                //         gap: 4,
                //         color: `${theme.colors.text.link} !important`,
                //         textDecoration: 'none',
                //         ':hover': {
                //             textDecoration: 'underline',
                //             color: theme.colors.text.link,
                //         },
                //     }}
                // >
                //     {category.displayName}
                // </Link>,
                ();
        });

        // Add a comma between each athlete
        for (let i = 0; i < athletesFormatted.length; i++) {
            if (i !== 0) {
                athletesFormatted.splice(i, 0, <span>, </span>);
            }
        }

        return athletesFormatted;
    };

    const categoriesFormatted = formatCategories(props.categories);

    return categoriesFormatted && categoriesFormatted.length > 0 ? (
        <>{categoriesFormatted}&nbsp;•&nbsp;</>
    ) : null;
};
