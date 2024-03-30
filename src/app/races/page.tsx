import { menu } from '@/data/menu';
import { PageLayout } from '../../../library/components/Layout/PageLayout';
import { QuicklinksContainer } from '../../../library/components/Quicklink/Container';

export default function Races() {
    const menuItems = menu.filter((item) => item.to === '/races')[0]?.items;

    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Les courses',
                },
            ]}
        >
            <p>Choissisez votre épreuve, il y en a pour tous les goûts :</p>
            {menuItems ? (
                <QuicklinksContainer quicklinks={menuItems} />
            ) : (
                <p>Impossible de charger les sous-catégories.</p>
            )}
        </PageLayout>
    );
}
