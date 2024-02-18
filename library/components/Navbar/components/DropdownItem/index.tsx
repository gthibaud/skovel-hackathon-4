import { MenuItem } from '@/data/menu';
import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';
import './styles.css';

export type DropdownItem = {
    title: string;
    to: string;
    icon?: ReactElement;
};

interface DropdownItemProps {
    dropdownItem: MenuItem;
}

export const DropdownItem: FC<DropdownItemProps> = (props) => {
    const { title, to, iconFill: Icon } = props.dropdownItem;

    const pathname = usePathname();
    const router = useRouter();

    const isActive = pathname.startsWith(to);

    return (
        <li>
            <a
                className={`dropdown-item dropdown-item-${isActive ? 'active' : ''}`}
                onClick={() => router.push(to)}
            >
                {/* Using the slot pattern to render the icon (https://stackoverflow.com/questions/76614923/how-to-pass-a-component-as-a-prop-using-next-13) */}
                {Icon &&
                    <Icon.type
                        {...Icon.props}
                        style={{
                            display: 'flex',
                            margin: '0',
                        }}
                        size={28}
                        className="icon"
                    />
                }
                {title}
            </a>
        </li>
    );
};
