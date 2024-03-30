import { FC } from 'react';
import { Link } from '../Link';

export type BreadCrumbItem = {
    label: string;
    to?: string;
};

interface PageLayoutProps {
    children: string | string[] | JSX.Element | JSX.Element[] | undefined;
    breadcrumbs: BreadCrumbItem[];
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
    const { children, breadcrumbs } = props;

    return (
        <main>
            <h1>
                {/* Breadcrumbs without last element  */}
                {breadcrumbs.slice(0, -1).map((breadcrumb, index) => (
                    <span key={index}>
                        <Link
                            to={breadcrumb.to || '/'}
                            style={{ opacity: 0.5, color: 'inherit' }}
                        >
                            {breadcrumb.label}
                        </Link>
                        <span style={{ opacity: 0.5 }}>{' / '}</span>
                    </span>
                ))}
                {/* Last breadcrumb  */}
                <span>{breadcrumbs.slice(-1)[0].label}</span>
            </h1>
            {children}
        </main>
    );
};
