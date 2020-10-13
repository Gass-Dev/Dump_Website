// Imports
import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Axios from 'axios';
import marker from '../assets/images/logo-bin.svg';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2Fzcy1kZXYiLCJhIjoiY2tmNWlrMWs3MG5sMzJ5bm8wNmZzbzVxaCJ9.hAUlN6_W3j6zbC--NqYUkg';
//process.env.

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
        const geocode = async () => {
            let response = await Axios.get('http://localhost:8000/api/postreports')

            let reports = response.data.posts.map(async (post) => {

                let numberStreet = post.numberStreet.toString()
                let postalCode = post.postalCode.toString()
                let result = await Axios.get(`https://api-adresse.data.gouv.fr/search/?q=${numberStreet}+${post.street}+${postalCode}+${post.city}`)

                if (result.data.features.length) {
                    post.coordinates = result.data.features[0].geometry.coordinates
                    console.log(result.data.features[0].geometry.coordinates)
                }
                return post;
            })
            console.log('tutu', reports)
            Promise.all(reports).then(values => {
                console.log(values);
                setReportsData(values)
            })
        }
        geocode();

        // console.log(reportsData)
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
                        key={report}
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
                        latitude={reportsData}
                        longitude={reportsData}
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