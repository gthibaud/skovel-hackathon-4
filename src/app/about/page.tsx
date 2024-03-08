import { menu } from '@/data/menu';
import { QuicklinksContainer } from '../../../library/components/Quicklink/Container';
import './page.css';

export default function Courses() {
    const menuItems = menu.filter((item) => item.to === '/about')[0]?.items;

    return (
        <main>
            <h1>Informations</h1>
            <p>Retrouvez ici toutes les informations sur la CapybaRun 2024 :</p>
            {menuItems ? (
                <QuicklinksContainer quicklinks={menuItems} />
            ) : (
                <p>Impossible de charger les sous-catégories.</p>
            )}
        </main>
    );
}
