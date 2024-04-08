'use client';
import 'maplibre-gl/dist/maplibre-gl.css';
import { FC, useEffect, useState } from 'react';
import MapGL, { Layer, MapRef, Marker, Source } from 'react-map-gl/maplibre';

interface MapProps {
    longitude: number;
    latitude: number;
    zoom?: number;
    height?: number;
    traceGpx?: any[];
    disableInteractions?: boolean;
}

export const Map: FC<MapProps> = (props) => {
    const {
        longitude,
        latitude,
        zoom = 4,
        height = 300,
        traceGpx,
        disableInteractions = false,
    } = props;
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
        <div style={{ width: '100%', height }}>
            <MapGL
                initialViewState={{
                    latitude,
                    longitude,
                    zoom,
                }}
                scrollZoom={!disableInteractions}
                dragPan={!disableInteractions}
                dragRotate={!disableInteractions}
                touchZoomRotate={!disableInteractions}
                doubleClickZoom={false}
                attributionControl={false}
                mapStyle={getStyleUrl()}
                style={{ width: '100%', height }}
                ref={setMap}
            >
                <Marker
                    latitude={latitude}
                    longitude={longitude}
                    color="var(--colors-primary-light)"
                />
                {traceGpx && (
                    <Source
                        id="polylineLayer"
                        type="geojson"
                        data={{
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: traceGpx?.map((point) => [point.lon, point.lat]) || [],
                            },
                        }}
                    >
                        <Layer
                            id="traceLayerHover"
                            type="line"
                            source="my-data2"
                            layout={{
                                'line-join': 'round',
                                'line-cap': 'round',
                            }}
                            paint={{
                                'line-color': 'transparent',
                                'line-width': 20,
                            }}
                        />
                        <Layer
                            id="directionArrowsLayer"
                            type="symbol"
                            source="polylineLayer"
                            paint={{
                                'icon-color': '#2A55EC',
                            }}
                            layout={{
                                'symbol-placement': 'line',
                                'icon-image': 'pin',
                                'icon-rotate': 245,
                                'icon-size': 0.2,
                                'icon-rotation-alignment': 'map',
                                'icon-allow-overlap': true,
                                'icon-ignore-placement': true,
                                'icon-offset': [10, 0],
                            }}
                        />
                        <Layer
                            id="lineLayer"
                            type="line"
                            source="my-data"
                            layout={{
                                'line-join': 'round',
                                'line-cap': 'round',
                            }}
                            paint={{
                                'line-color': '#2A55EC',
                                'line-width': 4,
                            }}
                        />
                        <Layer
                            id="lineLayer2"
                            type="line"
                            source="my-data2"
                            layout={{
                                'line-join': 'round',
                                'line-cap': 'round',
                            }}
                            paint={{
                                'line-color': '#B5CBFB',
                                'line-width': 2,
                            }}
                        />
                    </Source>
                )}
            </MapGL>
        </div>
    );
};
