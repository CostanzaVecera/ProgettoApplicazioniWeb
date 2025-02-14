import bahrain from '../assets/images/bahrain.png';
import saudi from '../assets/images/saudi.png';
import australian from '../assets/images/australian.png';
import japanese from '../assets/images/japanese.png';
import chinese from '../assets/images/chinese.png';
import miami from '../assets/images/spanish.png';
import emiliaromagna from '../assets/images/emiliaromagna.png';
import monaco from '../assets/images/monaco.png';
import canadian from '../assets/images/canadian.png';
import spanish from '../assets/images/spanish.png';
import austrian from '../assets/images/austrian.png';
import british from '../assets/images/british.png';
import hungarian from '../assets/images/hungarian.png';
import belgian from '../assets/images/belgian.png';
import dutch from '../assets/images/dutch.png';
import italian from '../assets/images/italian.png';
import azerbaijan from '../assets/images/azerbaijan.png';
import singapore from '../assets/images/singapore.png';
import unitedstates from '../assets/images/unitedstates.png';
import mexicocity from '../assets/images/mexicocity.png';
import saopaulo from '../assets/images/saopaulo.png';
import lasvegas from '../assets/images/lasvegas.png';
import qatar from '../assets/images/qatar.png';
import abudhabi from '../assets/images/abudhabi.png';

export const getRaceImage = (circuitId) => {
    const circuitImages = {
        "Bahrain Grand Prix": bahrain,
        "Saudi Arabian Grand Prix": saudi,
        "Australian Grand Prix": australian,
        "Japanese Grand Prix": japanese,
        "Chinese Grand Prix": chinese,
        "Miami Grand Prix": miami,
        "Emilia Romagna Grand Prix": emiliaromagna,
        "Monaco Grand Prix": monaco,
        "Canadian Grand Prix": canadian,
        "Spanish Grand Prix": spanish,
        "Austrian Grand Prix": austrian,
        "British Grand Prix": british,
        "Hungarian Grand Prix": hungarian,
        "Belgian Grand Prix": belgian,
        "Dutch Grand Prix": dutch,
        "Italian Grand Prix": italian,
        "Azerbaijan Grand Prix": azerbaijan,
        "Singapore Grand Prix": singapore,
        "United States Grand Prix": unitedstates,
        "Mexico City Grand Prix": mexicocity,
        "São Paulo Grand Prix": saopaulo,
        "Las Vegas Grand Prix": lasvegas,
        "Qatar Grand Prix": qatar,
        "Abu Dhabi Grand Prix": abudhabi
    };

    return circuitImages[circuitId];
};