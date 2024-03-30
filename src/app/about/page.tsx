import { menu } from '@/data/menu';
import { PageLayout } from '../../../library/components/Layout/PageLayout';
import { QuicklinksContainer } from '../../../library/components/Quicklink/Container';
import './page.css';

export default function Courses() {
    const currentItem = menu.filter((item) => item.to === '/about')[0];
    const menuItems = currentItem.items;

    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: currentItem.title,
                },
            ]}
        >
            <p>{currentItem.summary}</p>
            {menuItems ? (
                <QuicklinksContainer quicklinks={menuItems} />
            ) : (
                <p>Impossible de charger les sous-catégories.</p>
            )}
        </PageLayout>
    );
}
