import { PastEditionsQuickinks } from '@/components/PastEditions';
import { menu } from '@/data/menu';
import { Card } from '../../../library/components/Card';
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
            <Card title={'Éditions précédentes'}>
                <p>Retrouvez les résultats et médias des dernières éditions de la CapybaRun:</p>
                <br />
                <PastEditionsQuickinks />
            </Card>
        </main>
    );
}
