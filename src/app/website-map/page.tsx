import { menu } from '@/data/menu';
import { QuicklinksContainerRecursive } from '../../../library/components/Quicklink/ContainerRecursive';

export default function WebsiteMap() {
    return (
        <main>
            <h1>Plan du site</h1>
            {menu.map((item, index) => (
                <QuicklinksContainerRecursive
                    key={index}
                    item={item}
                />
            ))}
        </main>
    );
}
