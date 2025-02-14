import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardGrid from "../../components/CardGrid/CardGrid.jsx";
import TableCard from "../../components/TableCard/TableCard.jsx";
import style from './Season2024.module.css';
import clsx from 'clsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function Season2024() {
    const [displayGrid, setDisplayGrid] = useState(true);
    const [races, setRaces] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://ergast.com/api/f1/2024.json')
            .then(response => {
                console.log('Response Races:', response);
                return response.json();
            })
            .then(data => {
                console.log('Race Data:', data);

                const racesData = data.MRData?.RaceTable?.Races;

                if (Array.isArray(racesData)) {
                    setRaces(racesData);
                } else {
                    setRaces([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching races:', error);
                setError('Failed to fetch race data');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

    const handleCardClick = (round) => {
        navigate(`/Season2024/${round}`);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">F1 2024 RACES</h1>
            <div className="row mb-4">
                <div className="col text-center">
                    <div className={style.switch}>
                        <div
                            className={clsx(style.option, {[style.active]: displayGrid})}
                            onClick={() => setDisplayGrid(true)}
                        >
                            Grid
                        </div>
                        <div
                            className={clsx(style.option, {[style.active]: !displayGrid})}
                            onClick={() => setDisplayGrid(false)}
                        >
                            Table
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col">
                    {
                        displayGrid ?
                                    <div className="col">
                                        <CardGrid
                                            races={races}
                                            col={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
                                            onCardClick={handleCardClick}
                                        />
                                    </div>
                            :
                            <TableCard
                                races={races}
                                navigate={navigate} />
                    }
                </div>
            </div>
        </div>
    );
}

export default Season2024