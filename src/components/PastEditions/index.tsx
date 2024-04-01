import { editions } from '@/data/editions';
import { FC } from 'react';
import { EditionQuicklink } from './EditionQuicklink';
import './styles.css';

export const PastEditionsQuickinks: FC = () => {
    return (
        <div className="editions-quicklinks-container">
            {editions?.map(
                (item) =>
                    !item.current && (
                        <EditionQuicklink
                            item={item}
                            key={item.to}
                        />
                    ),
            )}
        </div>
    );
};
