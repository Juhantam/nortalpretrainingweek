import PropTypes from "prop-types";

const PokemonType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.shape({
        english: PropTypes.string.isRequired,
        japanese: PropTypes.string.isRequired,
        chinese: PropTypes.string.isRequired,
        french: PropTypes.string.isRequired,
    }),
    type: PropTypes.arrayOf(PropTypes.string),
    base: PropTypes.shape({
        HP: PropTypes.number.isRequired,
        attack: PropTypes.number.isRequired,
        "Sp. Attack": PropTypes.number.isRequired,
        "Sp. Defence": PropTypes.number.isRequired,
        Speed: PropTypes.number.isRequired,
    })
})

export default PokemonType;