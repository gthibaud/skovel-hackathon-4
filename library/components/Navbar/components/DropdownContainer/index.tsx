import { FC, MutableRefObject, useEffect, useState } from 'react';

import { MenuItem } from '@/data/menu';
import { Collapse } from '@mui/material';
import { DropdownItem } from '../DropdownItem';
import './styles.css';

interface DropdownContainerProps {
    dropdownItems: MenuItem[];
    isFocused: boolean;
    setIsFocused: (isFocused: boolean) => void;
    parentRef: MutableRefObject<HTMLDivElement | null>;
    onClick: () => void;
}

export const DropdownContainer: FC<DropdownContainerProps> = (props) => {
    const { dropdownItems, setIsFocused, isFocused, parentRef, onClick } = props;

    const [containerPositionLeft, setContainerPositionLeft] = useState<number>(0);
    const [containerPositionTop, setContainerPositionTop] = useState<number>(0);

    const updateMenuContainerDimensions = (parentRef: MutableRefObject<HTMLDivElement | null>) => {
        if (parentRef.current) {
            const rect = parentRef.current.getBoundingClientRect();
            setContainerPositionLeft(rect.left);
            setContainerPositionTop(rect.height + rect.top);
        }
    };

    // On mount, update the dimensions of the menu container
    useEffect(() => {
        updateMenuContainerDimensions(parentRef);

        if (parentRef.current) {
            // Attach a listener to the window to update the dimensions of the menu container
            window.addEventListener('resize', () => updateMenuContainerDimensions(parentRef));
        }
        return () => {
            // Remove the listener when the component is unmounted
            window.removeEventListener('resize', () => updateMenuContainerDimensions(parentRef));
        };
    }, [parentRef.current]);

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
                            onClick={onClick}
                        />
                    ))}
                </ul>
            </Collapse>
        </div>
    );
};
