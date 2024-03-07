import { menu } from '@/data/menu';
import { QuicklinksContainer } from '../../../library/components/Quicklink/Container';

export default function Races() {
    const menuItems = menu.filter((item) => item.to === '/races')[0]?.items;

    return (
        <main>
            <h1>Les épreuves</h1>
            <p>Choissisez votre épreuve, il y en a pour tous les goûts :</p>
            {menuItems ? (
                <QuicklinksContainer quicklinks={menuItems} />
            ) : (
                <p>Impossible de charger les sous-catégories.</p>
            )}
        </main>
    );
}
