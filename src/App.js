import logo from './logo.svg';
import './App.css';
import pokemon from "./pokemon.json";

function App() {


    return (
        <div className="App">
            <h1 className="title">Pokemon search</h1>
            <table width="100%">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                </tr>
                </thead>
                <tbody>
                {pokemon.slice(0, 20).map(pokemon => (
                    <tr key={pokemon.id}>
                        <td>{pokemon.name.english}</td>
                        <td>{pokemon.type.join(", ")}</td>

                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
