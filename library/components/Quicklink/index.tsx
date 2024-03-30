import { MenuItem } from '@/data/menu';
import { FC } from 'react';
import { Link } from '../Link';
import './styles.css';

interface QuicklinkProps {
    quicklink: MenuItem;
}

export const Quicklink: FC<QuicklinkProps> = (props) => {
    const { title, to, iconFill: Icon, summary } = props.quicklink;

    return (
        <Link
            to={to}
            className="quicklink"
        >
            <>
                {/* Using the slot pattern to render the icon (https://stackoverflow.com/questions/76614923/how-to-pass-a-component-as-a-prop-using-next-13) */}
                {Icon && (
                    <Icon.type
                        {...Icon.props}
                        style={{
                            display: 'flex',
                            margin: '0',
                        }}
                        size={38}
                        className="icon"
                    />
                )}
                <div className="title">{title}</div>
                <div className="summary">{summary}</div>
            </>
        </Link>
    );
};
