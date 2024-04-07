import { LatLng } from '..';

export type EventVisibility = 'draft' | 'published' | 'deleted';

export type EventCategory = {
    id: string;
    name: string;
};

export type EventAthlete = {
    id: string;
    displayName: string;
    profileImageSrc?: string;
    distanceFromStart?: number; // Distance of the athlete when the event occured (in Km)
    position?: LatLng; // Position of the athlete when the event occured (LatLng)
};

export type EventAuthor = {
    id: string;
    displayName: string;
    profileImageSrc?: string;
};

export type Event = {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    visibility: EventVisibility;
    // content: EventContent;
    content: any;
    author: EventAuthor; // This type is subset of User (it is custom-made for front and not representative of the data model for optimizations purposes)
    athletes: EventAthlete[]; // The event is related to one or many athletes (ex: event posted by an athlete about himself, or event posted by the race organization about the categories A and B)
    categories: EventCategory[]; // The event is related to a category feed (ex: event posted by the administration to the overall posts list, or posted by an athlete and promoted to the overall posts list)
    isPartnership: boolean; // True if the event is a partnership with a brand
    likes: number; // Number of likes

    position: LatLng | undefined; // Used to display events on the map
    distance: number | undefined; // Used to display events on the map
};
