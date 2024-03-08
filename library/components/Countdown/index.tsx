'use client';

import localeFr from 'date-fns/locale/fr';
import { FC } from 'react';
import { useCountdown } from './utils';

import { format } from 'date-fns';
import './styles.css';

interface CountdownProps {
    startDate: number;
}

export const Countdown: FC<CountdownProps> = (props) => {
    const { startDate } = props;

    const [days, hours, minutes, seconds] = useCountdown(startDate * 1000);

    const date = new Date(startDate * 1000);

    return (
        <div className="countdown-container">
            <div className="countdown">
                {days} jours - {hours}:{minutes}:{seconds}
            </div>
            <div className="title">
                Départ le{' '}
                {format(date, 'PPP', {
                    locale: localeFr,
                })}{' '}
                à 8h au Markstein (68).
            </div>
        </div>
    );
};
