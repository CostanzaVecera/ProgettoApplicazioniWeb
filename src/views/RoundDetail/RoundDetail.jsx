import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCircuitImage } from "../../utility/utility2.jsx";
import Table from "../../components/Table/Table.jsx";
import style from "./RoundDetail.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function RoundDetail() {
    const { round } = useParams();
    const [raceDetails, setRaceDetails] = useState(null);
    const [raceResults, setRaceResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [visibleColumns, setVisibleColumns] = useState({
        position: true,
        driver: true,
        constructor: true,
        grid: true,
        time: true,
        points: true
    });

    useEffect(() => {
        fetch(`https://ergast.com/api/f1/2024/${round}.json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setRaceDetails(data.MRData.RaceTable.Races[0]);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load race details:', err);
                setError('Failed to load race details');
                setLoading(false);
            });

        fetch(`https://ergast.com/api/f1/2024/${round}/results.json`)
            .then((response) => response.json())
            .then((data) => {
                const results = data.MRData.RaceTable.Races[0]?.Results || [];
                setRaceResults(results);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to load race details:', err);
                setError('Failed to load race results');
                setLoading(false);
            });
    }, [round]);

    if (loading) return <div className="text-center mt-5">Loading...</div>;
    if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

    const handleColumnToggle = (column) => {
        setVisibleColumns((prevState) => ({
            ...prevState,
            [column]: !prevState[column]
        }));
    };

    const renderRow = (result, index) => (
        <tr key={index}>
            {visibleColumns.position && <td>{result.position}</td>}
            {visibleColumns.driver && <td>{`${result.Driver.givenName} ${result.Driver.familyName}`}</td>}
            {visibleColumns.constructor && <td>{result.Constructor.name}</td>}
            {visibleColumns.grid && <td>{result.grid}</td>}
            {visibleColumns.time && <td>{result.Time ? result.Time.time : 'N/A'}</td>}
            {visibleColumns.points && <td>{result.points}</td>}
        </tr>
    );

    const columns = ['POSITION', 'DRIVER', 'CONSTRUCTOR', 'GRID', 'TIME', 'POINTS'];


    return (
        <div>
            <div className={style.racebanner}>
                <img
                    src={getCircuitImage(raceDetails.raceName)}
                    alt={`Immagine di ${raceDetails.raceName}`}
                    className={style.raceimage}
                />
                <div className={style.raceinfo}>
                    <h1 id={style.title}>{raceDetails.Circuit.Location.country}</h1>
                </div>
            </div>
            <div className="container mt-5">
                <h2 className="text-center mt-4 mb-4">RACE RESULTS</h2>
                <div className="d-flex justify-content-center mb-3">
                    {columns.map((column) => (
                        <div key={column} className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={column}
                                checked={visibleColumns[column.toLowerCase()]}
                                onChange={() => handleColumnToggle(column.toLowerCase())}
                            />
                            <label className="form-check-label" htmlFor={column}>
                                {column}
                            </label>
                        </div>
                    ))}
                </div>
                <Table
                    columns={columns.filter((column) => visibleColumns[column.toLowerCase()])}
                    data={raceResults}
                    renderRow={renderRow}/>
            </div>
        </div>
    );
}

export default RoundDetail;