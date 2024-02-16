import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import './styles.css';

export type DropdownItem = {
    title: string;
    to: string;
};

interface DropdownItemProps {
    dropdownItem: DropdownItem;
}

export const DropdownItem: FC<DropdownItemProps> = (props) => {
    const { title, to } = props.dropdownItem;

    const pathname = usePathname();
    const router = useRouter();

    const isActive = pathname.startsWith(to);

    return (
        <li>
            <a
                className={`dropdown-item dropdown-item-${isActive ? 'active' : ''}`}
                onClick={() => router.push(to)}
            >
                {title}
            </a>
        </li>
    );
};
