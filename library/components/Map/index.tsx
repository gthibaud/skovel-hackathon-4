'use client';
import { FC, useEffect, useState } from 'react';
import MapGL from 'react-map-gl/maplibre';

interface MapProps {
    longitude: number;
    latitude: number;
}

export const Map: FC<MapProps> = (props) => {
    const { longitude, latitude } = props;
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        return window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (e) => setDarkMode(e.matches));
    }, []);

    const getStyleUrl = () => {
        if (darkMode) {
            return 'https://tiles.stadiamaps.com/styles/alidade_smooth_dark.json';
        } else {
            return 'https://tiles.stadiamaps.com/styles/outdoors.json';
        }
    };

    return (
        <MapGL
            initialViewState={{
                longitude,
                latitude,
                zoom: 12,
            }}
            mapStyle={getStyleUrl()}
            attributionControl={false}
        ></MapGL>
    );
};
