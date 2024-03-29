import { FC } from 'react';

interface BackdropProps {
    open: boolean;
    onClose: () => void;
}

export const Backdrop: FC<BackdropProps> = (props) => {
    const { open, onClose } = props;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1,
                opacity: open ? 1 : 0,
                pointerEvents: open ? 'auto' : 'none', // Permet de capturer les clics uniquement lorsque le backdrop est visible
                backgroundColor: 'rgba(50, 50, 50, 0.4)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
            }}
            onClick={onClose}
        />
    );
};
