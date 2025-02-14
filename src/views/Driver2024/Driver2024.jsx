import React, { useEffect, useState } from 'react';
import Table from "../../components/Table/Table.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function Driver2024() {
    const [drivers, setDrivers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://ergast.com/api/f1/2024/drivers.json')
            .then(response => {
                console.log('Response Drivers:', response);
                return response.json();
            })
            .then(data => {
                console.log('Driver Data:', data);
                const driversData = data.MRData.DriverTable.Drivers;
                setDrivers(driversData);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching drivers:', err);
                setError('Impossibile recuperare i dati dei piloti');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Caricamento...</div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">DRIVERS 2024</h1>
            <Table
                columns={["NAME", "PERMANENT NUMBER", "NATIONALITY", "DATE OF BIRTH"]}
                data={drivers}
                renderRow={(driver, index) => (
                    <tr key={index}>
                        <td>{`${driver.givenName} ${driver.familyName}`}</td>
                        <td>{driver.permanentNumber}</td>
                        <td>{driver.nationality}</td>
                        <td>{driver.dateOfBirth}</td>
                    </tr>
                )}
            />
        </div>
    );
}

export default Driver2024;