import React, { useContext } from 'react';
import Mapbox from '../Mapbox/Mapbox';
import Header from '../../organisms/Header';
import HomePublic from '../../molecules/HomePublic';
import { AuthContext } from '../../../App';

function Home() {
    const { state } = useContext(AuthContext);

    if (state.isAuthenticated === false) {
        return (
            <div>
                <Header />
                <HomePublic />
            </div>
        )
    } else {
        return (
            <div>
            <Header />
            <Mapbox />
            </div>
        )
    }
}

export default Home;