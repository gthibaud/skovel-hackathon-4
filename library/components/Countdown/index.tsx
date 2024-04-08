'use client';

import localeFr from 'date-fns/locale/fr';
import { FC, useState } from 'react';
import { Map } from '../Map';
import { useCountdown } from './utils';

import { format } from 'date-fns';
import './styles.css';

interface CountdownProps {
    startDate: number;
}

export const Countdown: FC<CountdownProps> = (props) => {
    const { startDate } = props;

    const [date, _] = useState<Date>(new Date(startDate * 1000));
    const [days, hours, minutes, seconds] = useCountdown(startDate * 1000);

    return (
        <div className="countdown-container">
            <div className="countdown">
                {days} jours, {hours}:{minutes}:{seconds}
            </div>
            <p>
                <div className="title">
                    {format(date, 'PPP', {
                        locale: localeFr,
                    })}{' '}
                    à 8h au Markstein (68).
                </div>
            </p>
            <Map
                longitude={7.028784}
                latitude={47.926232}
                height={280}
                disableInteractions
            />
        </div>
    );

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
