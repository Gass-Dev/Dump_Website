import React, { useContext } from 'react';
import Mapbox from '../Mapbox/Mapbox';
// import NavBar from '../../molecules/NavBar';
import HomePublic from '../../molecules/HomePublic';
import { AuthContext } from '../../../App';

function Home() {
    const { state } = useContext(AuthContext);

    if (state.isAuthenticated === false) {
        return (
            <div>
                <HomePublic />
            </div>
        )
    } else {
        return (
            <div>
            <Mapbox />
            </div>
        )
    }
}

export default Home;