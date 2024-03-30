import { Edition } from '@/data/editions';
import { FC } from 'react';
import { Link } from '../../../library/components/Link';
import { Tooltip } from '../../../library/components/Tooltip';

interface EditionQuickinkProps {
    item: Edition;
}

export const EditionQuicklink: FC<EditionQuickinkProps> = (props) => {
    const { name, to } = props.item;

    return (
        <Tooltip title={`Édition ${name}`}>
            <Link
                className="quicklink-container"
                to={to}
            >
                <p className="quicklink-title">{name}</p>
            </Link>
        </Tooltip>
    );
};
