// Imports
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Axios from 'axios';
import marker from '../assets/images/logo-bin.svg';

// Token MapBox
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2Fzcy1kZXYiLCJhIjoiY2tmNWlrMWs3MG5sMzJ5bm8wNmZzbzVxaCJ9.hAUlN6_W3j6zbC--NqYUkg';

function Home() {
    const [viewport, setViewport] = useState({
        latitude: 48.8566969,
        longitude: 2.3514616,
        width: "100vw",
        height: "100vh",
        zoom: 12
    });
    const [reportsData, setReportsData] = useState([])

    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/postreports')
            .then((response) => {
                setReportsData(response.data.posts)
                alert.show('Signalement enregistré 😊')
            })
            .catch((error) => {
                setReportsData(error)
            })

        const listener = e => {
            if (e.key === "Signaler") {
                setSelectedReport(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

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

                {reportsData.map(report => (
                    <Marker
                        key={report.id}
                        latitude={48.8566969}
                        longitude={2.3514616}
                    >
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedReport(report);
                            }}
                        >
                            <img src={marker} alt="Report  Icon" width="24" height="24"

                            />
                        </button>
                    </Marker>
                ))}

                {selectedReport ? (
                    <Popup
                        latitude={48.8566969}
                        longitude={2.3514616}
                        onClose={() => {
                            setSelectedReport(null);
                        }}
                    >
                        <div>
                            {/* <h2>{selectedReport.properties.NAME}</h2>
                            <p>{selectedReport.properties.DESCRIPTION}</p> */}
                        </div>
                    </Popup>
                ) : null}
            </ReactMapGL>
        </div>
    );
}

export default Home;