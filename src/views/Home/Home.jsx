import React, { useEffect, useState } from 'react';
import Table from "../../components/Table/Table.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const [constructorStandings, setConstructorStandings] = useState([]);
    const [driverStandings, setDriverStandings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchConstructors = fetch('https://ergast.com/api/f1/2024/24/constructorStandings.json')
            .then(response => {
                console.log('Response Constructor:', response);
                return response.json();
            })
            .then(data => {
                console.log('Constructor Data:', data);
                return data.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings;
            })
            .catch(error => {
                console.error('Error fetching constructors:', error);
            });

        const fetchDrivers = fetch('https://ergast.com/api/f1/2024/24/driverStandings.json')
            .then(response => {
                console.log('Response Driver:', response);
                return response.json();
            })
            .then(data => {
                console.log('Driver Data:', data);
                return data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings;
            })
            .catch(error => {
                console.error('Error fetching drivers:', error);
            });

        Promise.all([fetchConstructors, fetchDrivers])
            .then(([constructorsData, driversData]) => {
                console.log('Constructors Data:', constructorsData);
                console.log('Drivers Data:', driversData);
                setConstructorStandings(constructorsData || []);
                setDriverStandings(driversData || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Errore nel recupero dei dati:", err);
                setError('Impossibile recuperare i dati delle classifiche');
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-5">Loading...</div>;
        if (error) return <div className="text-center mt-5 text-danger">{error}</div>;

        return (
            <div className="container mt-5">
                <h1 className="text-center mb-4">F1 2024 STANDINGS</h1>
                <h2 className="mb-3">CONSTRUCTOR STANDINGS</h2>
                <Table
                    columns={["POSITION", "CONSTRUCTOR", "NATIONALITY", "POINTS", "WINS"]}
                    data={constructorStandings}
                    renderRow={(constructor, index) => (
                        <tr key={index}>
                            <td>{constructor.position}</td>
                            <td>{constructor.Constructor.name}</td>
                            <td>{constructor.Constructor.nationality}</td>
                            <td>{constructor.points}</td>
                            <td>{constructor.wins}</td>
                        </tr>
                    )}
                />
                <h2 className="mt-5 mb-3">DRIVER STANDINGS</h2>
                <Table
                    columns={["POSITION", "DRIVER", "CONSTRUCTOR", "POINTS", "WINS"]}
                    data={driverStandings}
                    renderRow={(driver, index) => (
                        <tr key={index}>
                            <td>{driver.position}</td>
                            <td>{`${driver.Driver.givenName} ${driver.Driver.familyName}`}</td>
                            <td>{driver.Constructors[0].name}</td>
                            <td>{driver.points}</td>
                            <td>{driver.wins}</td>
                        </tr>
                    )}
                />
            </div>
        );
}
export default Home;