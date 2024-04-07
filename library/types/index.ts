export type LatLng = [number, number];

export type RoadbookPoint = {
    id: string;
    name: string;
    type:
        | 'start'
        | 'cp'
        | 'pass'
        | 'shop'
        | 'hospitality'
        | 'hab'
        | 'finish'
        | 'water'
        | 'restaurant';
    position: LatLng;
    distance: number;
};
