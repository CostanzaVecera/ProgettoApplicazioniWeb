import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import Card from "../Card/Card.jsx";

function CardGrid(props) {
    const { races, onCardClick } = props;

    const raceCardsCol = races.map((race) => {
        return (
            <div key={race.round} className="col-4">
                <Card
                    race={race}
                    onCardClick={onCardClick}
                />
            </div>
        );
    });

    return (
        <div className={"row"}>
            {raceCardsCol}
        </div>
    );
}

CardGrid.propTypes = {
    races: PropTypes.arrayOf(
        PropTypes.shape({
            round: PropTypes.string.isRequired,
            raceName: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            Circuit: PropTypes.shape({
                circuitId: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired,
    col: PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number
    }).isRequired,
    onCardClick: PropTypes.func.isRequired
};

export default CardGrid;