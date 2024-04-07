import { Event } from '../../../../../library/types/Event';

export interface EventContentProps {
    content: Event['content'] | undefined;
    mode?: 'inline' | 'full'; // Is the content displayed inside a list (inline) or on its own page (full). The full mode allows to perform specific actions (ex: full page image), while the inline mode is more restrictive (ex: every click should navigate to the event page)
    athletes?: Event['athletes'];
}
