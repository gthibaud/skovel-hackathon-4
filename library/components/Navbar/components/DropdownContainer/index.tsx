import { FC, MutableRefObject, useEffect, useState } from 'react';

import { Collapse } from '@mui/material';
import { DropdownItem } from '../DropdownItem';
import './styles.css';

interface DropdownContainerProps {
    dropdownItems: DropdownItem[];
    isFocused: boolean;
    setIsFocused: (isFocused: boolean) => void;
    parentRef: MutableRefObject<HTMLDivElement | null>;
}

export const DropdownContainer: FC<DropdownContainerProps> = (props) => {
    const { dropdownItems, setIsFocused, isFocused, parentRef } = props;

    const [containerPositionLeft, setContainerPositionLeft] = useState<number>(0);
    const [containerPositionTop, setContainerPositionTop] = useState<number>(0);

    useEffect(() => {
        if (parentRef.current) {
            const rect = parentRef.current.getBoundingClientRect();
            setContainerPositionLeft(rect.left);
            setContainerPositionTop(rect.height + rect.top);
        }
    }, [parentRef]);

    return (
        <div
            style={{
                position: 'fixed',
                left: `${containerPositionLeft}px`,
                top: `${containerPositionTop}px`,
                paddingTop: 12,
                height: 'auto',
                width: 'auto',
            }}
            onMouseOver={() => setIsFocused(true)}
            onMouseOut={() => setIsFocused(false)}
        >
            <Collapse
                in={isFocused}
                timeout="auto"
            >
                <ul className={'dropdown-container'}>
                    {dropdownItems.map((item, index) => (
                        <DropdownItem
                            key={index}
                            dropdownItem={item}
                        />
                    ))}
                </ul>
            </Collapse>
        </div>
    );
};
