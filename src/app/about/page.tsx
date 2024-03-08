import { menu } from '@/data/menu';
import { QuicklinksContainer } from '../../../library/components/Quicklink/Container';
import './page.css';

export default function Courses() {
    const currentItem = menu.filter((item) => item.to === '/about')[0];
    const menuItems = currentItem.items;

    return (
        <main>
            <h1>{currentItem.title}</h1>
            <p>{currentItem.summary}</p>
            {menuItems ? (
                <QuicklinksContainer quicklinks={menuItems} />
            ) : (
                <p>Impossible de charger les sous-catégories.</p>
            )}
        </main>
    );
}
