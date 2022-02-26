import PokemonRow from "./PokemonRow";
import useStore from "../store";

function PokemonTable() {
    const pokemon = useStore((state) => state.pokemon);
    const filter = useStore((state) => state.filter);
    const setSelectedItem = useStore((state) => state.setSelectedItem);
    return (
        <>
            <table width="100%">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {pokemon.filter((pokemon) => pokemon.name.english.toLowerCase()
                    .includes(filter.toLowerCase()))
                    .slice(0, 20)
                    .map((pokemon) => (
                        <PokemonRow pokemon={pokemon} key={pokemon.id}
                                    onSelect={(pokemon) => setSelectedItem(pokemon)}/>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default PokemonTable;