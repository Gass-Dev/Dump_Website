import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2Fzcy1kZXYiLCJhIjoiY2tmNWlrMWs3MG5sMzJ5bm8wNmZzbzVxaCJ9.hAUlN6_W3j6zbC--NqYUkg';

function Home() {
    const [viewport, setViewport] = useState({
        latitude: 48.8566969,
        longitude: 2.3514616,
        width: "100vw",
        height: "100vh",
        zoom: 12
    });

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={MAPBOX_TOKEN}
                mapStyle={`mapbox://styles/gass-dev/ckf6vg87t3ylz1aqwmabhxeib`}
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
            </ReactMapGL>
        </div>
    );
}

export default Home;