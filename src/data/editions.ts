export type Edition = {
    name: string;
    to: string;
    current?: boolean;
};

export const editions: Edition[] = [
    {
        name: '2024',
        to: '/2024',
        current: true,
    },
    {
        name: '2023',
        to: '/2023',
    },
    {
        name: '2022',
        to: '/2022',
    },
    {
        name: '2021',
        to: '/2021',
    },
];
