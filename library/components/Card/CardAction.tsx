import { ArrowRight } from 'gthibaud-icons-react/lib/components/ArrowRight';
import { FC } from 'react';
import { Link } from '../Link';
import './styles.css';

export interface CardActionProps {
    actionTitle?: string;
    actionTo?: string;
    actionElement?: JSX.Element;
}

export const CardAction: FC<CardActionProps> = (props) => {
    const { actionTitle, actionElement, actionTo } = props;

    if (!actionTitle && !actionElement) {
        return null;
    }

    if (actionElement) {
        return actionElement;
    }

    return (
        <div className="card-header-action">
            <Link
                to={actionTo || ''}
                outline="text"
            >
                <>
                    {actionTitle}{' '}
                    <ArrowRight style={{ fontSize: '0.8 em', marginTop: 2, fill: 'inherit' }} />
                </>
            </Link>
        </div>
    );
};
