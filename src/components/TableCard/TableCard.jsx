import React from "react";
import {NavLink} from "react-router-dom";
import style from "./TableCard.module.css";
import {getRaceImage} from "../../utility/utility";

function TableCard(props) {
    const {races} = props;

    const raceRows = races.map((race) => {
        return (
            <tr key={race.round}>
                <td className={style.raceImage}>
                    <img
                        src={getRaceImage(race.raceName)}
                        alt={`Immagine di ${race.raceName}`}
                        className="race-card-image"
                    />
                </td>
                <td id={style.specialfont}>{race.raceName}</td>
                <td id={style.specialfont}>{race.date}</td>
                <td id={style.specialfont}>
                    <NavLink className={style.action} to={`/Season2024/${race.round}`}>Information</NavLink>
                </td>
            </tr>
        );
    });

    return (
        <table className={`table ${style.table}`}>
            <thead>
            <tr>
                <th></th>
                <th id={style.special}>RACE</th>
                <th id={style.special}>DATE</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {raceRows}
            </tbody>
        </table>
    );
}

export default TableCard;