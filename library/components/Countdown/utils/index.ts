'use client';
import { useEffect, useState } from 'react';

const useCountdown = (targetDate: string | number | Date) => {
    const countDownDate = new Date(targetDate).getTime();

    // const [countDown, setCountDown] = useState(
    //     hasRaceStarted()
    //         ? new Date().getTime() - countDownDate
    //         : countDownDate - new Date().getTime(),
    // );

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            // if (hasRaceStarted()) {
            //     setCountDown(new Date().getTime() - countDownDate);
            // } else {
            setCountDown(countDownDate - new Date().getTime());
            // }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown: number) => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, padTime(hours), padTime(minutes), padTime(seconds)];
};

const padTime = (time: number) => {
    return time.toString().padStart(2, '0');
};

export { useCountdown };
