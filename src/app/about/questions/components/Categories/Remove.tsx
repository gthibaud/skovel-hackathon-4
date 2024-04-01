import { CrossCircleFill } from 'gthibaud-icons-react';
import { FC } from 'react';
import './styles.css';

interface RemoveFilterProps {
    onClick: () => void;
}

export const RemoveFiltersButton: FC<RemoveFilterProps> = (props) => {
    const { onClick } = props;

    return (
        <div
            className={`category-quicklink remove`}
            onClick={onClick}
        >
            <CrossCircleFill className="category-quicklink-icon" />
            <p className="category-quicklink-text">Retirer filtres</p>
        </div>
    );
};
