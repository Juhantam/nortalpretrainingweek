import {Button} from "@material-ui/core";
import PokemonType from "./../PokemonType";

function PokemonRow({pokemon, onSelect}) {
    return (<>
        <tr key={pokemon.id}>
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
            <td>
                <Button variant="contained" color="primary" onClick={() => onSelect(pokemon)}>
                    More info!
                </Button>
            </td>
        </tr>
    </>);
}

export default PokemonRow;