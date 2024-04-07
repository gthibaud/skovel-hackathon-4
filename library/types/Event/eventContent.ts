import { RoadbookPoint } from '../../types';

export abstract class EventContent {
    public id: string;
    public type:
        | 'default'
        | 'poll'
        | 'image'
        | 'carousel'
        | 'video'
        | 'audio'
        | 'podcast'
        | 'raceEvent'
        | 'recap'
        | 'link';
    public showMedata: boolean = true;
    public showLikes: boolean = true;
    public showComments: boolean = true;

    constructor(id: string, type: any) {
        this.id = id;
        this.type = type;
    }

    public static mapContent = (obj: any): EventContent => {
        switch (obj.type) {
            case 'poll':
                return ContentPoll.mapContent(obj);
            case 'image':
                return ContentImage.mapContent(obj);
            case 'carousel':
                return ContentCarousel.mapContent(obj);
            case 'video':
                return ContentVideo.mapContent(obj);
            case 'audio':
                return ContentAudio.mapContent(obj);
            case 'podcast':
                return ContentPodcast.mapContent(obj);
            case 'raceEvent':
                return ContentRaceEvent.mapContent(obj);
            case 'link':
                return ContentLink.mapContent(obj);
            case 'recap':
                return ContentRecap.mapContent(obj);
            default:
                return ContentDefault.mapContent(obj);
        }
    };
}

export class ContentPoll extends EventContent {
    public closesAt: Date;
    public options: { id: string; label: string; votesCount: number }[];

    constructor(id: string, obj: any) {
        super(id, 'poll');
        this.closesAt = obj.closesAt;
        this.options = obj.options;
    }

    public static mapContent = (obj: any): ContentPoll => new ContentPoll(obj.id, obj);
}

export class ContentImage extends EventContent {
    public src: string;
    public alt: string;
    public fileType: string;

    constructor(id: string, src: string, alt: string, fileType: string) {
        super(id, 'image');
        this.src = src;
        this.alt = alt;
        this.fileType = fileType;
    }

    public static mapContent = (obj: any): ContentImage =>
        new ContentImage(obj.id, obj.src, obj.alt, obj.fileType);
}

export class ContentCarousel extends EventContent {
    public images: ContentImage[];

    constructor(id: string, images: ContentImage[]) {
        super(id, 'carousel');
        this.images = images;
    }

    public static mapContent = (obj: any): ContentCarousel =>
        new ContentCarousel(
            obj.id,
            obj.images.map((image: any) => ContentImage.mapContent(image)),
        );
}

export class ContentRecap extends EventContent {
    public showComments = false;
    public showLikes = false;
    public showMedata = false;
    public text: string;

    constructor(id: string, text: string) {
        super(id, 'recap');
        this.text = text;
    }

    public static mapContent = (obj: any): ContentRecap => new ContentRecap(obj.id, obj.text);
}

export class ContentVideo extends EventContent {
    public src: string;
    public alt: string;
    public fileType: string;

    constructor(id: string, src: string, alt: string, fileType: string) {
        super(id, 'video');
        this.src = src;
        this.alt = alt;
        this.fileType = fileType;
    }

    public static mapContent = (obj: any): ContentVideo =>
        new ContentVideo(obj.id, obj.src, obj.alt, obj.fileType);
}

export class ContentAudio extends EventContent {
    public src: string;
    public alt: string;
    public fileType: string;

    constructor(id: string, src: string, alt: string, type: string) {
        super(id, 'audio');
        this.src = src;
        this.alt = alt;
        this.fileType = type;
    }

    public static mapContent = (obj: any): ContentAudio =>
        new ContentAudio(obj.id, obj.src, obj.alt, obj.fileType);
}

export class ContentPodcast extends EventContent {
    public src: string;
    public platform: 'spotify';

    constructor(id: string, src: string, platform: string) {
        super(id, 'podcast');
        this.src = src;
        if (platform === 'spotify') {
            this.platform = platform;
        } else {
            throw new Error('Podcast platform not supported (only Spotify)');
        }
    }

    public static mapContent = (obj: any): ContentPodcast =>
        new ContentPodcast(obj.id, obj.src, obj.platform);
}

type RaceEventType = 'start' | 'finish' | 'withdrawal' | 'disqualification' | 'checkpointPass';

export class ContentRaceEvent extends EventContent {
    public eventType: RaceEventType;
    public pointId: string | undefined;
    public pointName: string | undefined;
    public happenedAt: Date | undefined;

    constructor(id: string, obj: any) {
        super(id, 'raceEvent');
        this.eventType = obj.eventType;
        this.pointId = obj.pointId;
        this.pointName = obj.pointName;
        this.happenedAt = obj.happenedAt;
    }

    public static mapContent = (obj: any): ContentRaceEvent => new ContentRaceEvent(obj.id, obj);

    public static mapRoadbookType = (type?: RoadbookPoint['type'] | string): RaceEventType => {
        switch (type) {
            case 'start':
                return 'start';
            case 'finish':
                return 'finish';
            case 'cp':
                return 'checkpointPass';
            case 'DNF':
                return 'withdrawal';
            default:
                return 'checkpointPass';
        }
    };
}

export class ContentLink extends EventContent {
    public src: string;
    public alt: string;

    constructor(id: string, src: string, alt: string) {
        super(id, 'link');
        this.src = src;
        this.alt = alt;
    }

    public static mapContent = (obj: any): ContentLink => new ContentLink(obj.id, obj.src, obj.alt);
}

export class ContentDefault extends EventContent {
    constructor(id: string) {
        super(id, 'default');
    }

    public static mapContent = (obj: any): ContentDefault => new ContentDefault(obj.id);
}
