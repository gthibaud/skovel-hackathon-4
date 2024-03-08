'use client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FC, useEffect, useState } from 'react';
import MapGL, { MapRef, Marker } from 'react-map-gl/maplibre';

interface MapProps {
    longitude: number;
    latitude: number;
    zoom?: number;
}

export const Map: FC<MapProps> = (props) => {
    const { longitude, latitude, zoom = 4 } = props;
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const [map, setMap] = useState<MapRef | null>(null);

    useEffect(() => {
        map?.resize();
    }, [map]);

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
        <div style={{ width: '100%', height: 300 }}>
            <MapGL
                initialViewState={{
                    latitude,
                    longitude,
                    zoom,
                }}
                attributionControl={false}
                mapStyle={getStyleUrl()}
                style={{ width: '100%', height: 300 }}
                ref={setMap}
            >
                <Marker
                    latitude={latitude}
                    longitude={longitude}
                    color="var(--colors-primary-light)"
                />
            </MapGL>
        </div>
    );
};
