import React from "react";
import { Card as BootstrapCard, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Card.module.css";
import { getRaceImage } from "../../utility/utility";

function Card(props) {
    const { race, onCardClick } = props;

    return (
        <NavLink to={`/Season2024/${race.round}`} className="text-decoration-none">
            <BootstrapCard className={style.card} onClick={() => onCardClick(race.round)}>
                <CardImg
                    onError={(e) => e.target.src = 'default_image_url_here'}
                    loading="lazy"
                    className={style.image}
                    src={getRaceImage(race.raceName)}
                    alt={`Immagine di ${race.raceName}`}
                />
                <CardBody className={`h-100 ${style.cardbody}`}>
                    <CardTitle tag="h5" className={`h5 ${style.title}`}>
                        {race.raceName}
                    </CardTitle>
                    <CardText className={`text-muted ${style.textcard}`}>
                        {race.date}
                    </CardText>
                </CardBody>
            </BootstrapCard>
        </NavLink>
    );
}

Card.propTypes = {
    race: PropTypes.shape({
        round: PropTypes.string.isRequired,
        raceName: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        Circuit: PropTypes.shape({
            circuitId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired,
    onCardClick: PropTypes.func.isRequired
};

export default Card;