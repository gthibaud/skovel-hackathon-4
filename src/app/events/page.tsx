import { events } from '@/data/events';
import { Divider } from '../../../library/components/Divider';
import { PageLayout } from '../../../library/components/Layout/PageLayout';
import { EventListItem } from './components/EventListItem';
import './styles.css';

export default function Events() {
    return (
        <PageLayout
            breadcrumbs={[
                {
                    label: 'Actualités',
                },
            ]}
        >
            <div
                style={{
                    maxWidth: 580,
                    margin: 'auto',
                }}
            >
                {events.map((event) => (
                    <EventListItem
                        key={event.id}
                        event={event}
                    />
                ))}
                <br />
                <Divider orientation="horizontal">Fin des résultats</Divider>
            </div>
        </PageLayout>
    );
}
