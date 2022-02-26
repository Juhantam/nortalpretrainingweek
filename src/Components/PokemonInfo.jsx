import {useSelector} from "react-redux";

function PokemonInfo() {
    const selectedItem = useSelector((state) => state.selectedItem);
    return selectedItem ? (
        <>
            <div>
                <h2>{selectedItem.name.english}</h2>
                <table>
                    <tbody>
                    {
                        Object.keys(selectedItem.base).map(key => (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{selectedItem.base[key]}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    ) : null;
}

export default PokemonInfo;