import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Table.module.css';
import PropTypes from 'prop-types';

function Table({ columns, data, renderRow }) {
    return (
        <table className={`table table-striped ${style.table}`}>
            <thead>
            <tr>
                {columns.map((col, index) => (
                    <th key={index}>{col}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((item, index) => renderRow(item, index))}
            </tbody>
        </table>
    );
}

Table.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    renderRow: PropTypes.func.isRequired
};

export default Table;