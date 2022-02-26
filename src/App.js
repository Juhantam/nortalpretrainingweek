import React from "react";
import styled from "@emotion/styled";

import './App.css';
import PokemonTable from "./Components/PokemonTable";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 1rem;
`;

const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {

    const [filter, filterSet] = React.useState("");
    const [pokemon, pokemonSet] = React.useState([]);
    const [selectedItem, selectedItemSet] = React.useState(null);

    React.useEffect(() => {
        fetch("http://localhost:3000/nortalpretrainingweek/pokemon.json")
            .then(response => response.json())
            .then((data) => pokemonSet(data))
    }, [])

    return (
        <PokemonContext.Provider
            value={{
                filter,
                filterSet,
                pokemon,
                pokemonSet,
                selectedItem,
                selectedItemSet,

            }}
        >
            <Container>
                <Title className="title">Pokemon search</Title>

                <TwoColumnLayout>
                    <div>
                        <PokemonFilter/>
                        <PokemonTable/>
                    </div>
                    <PokemonInfo/>
                </TwoColumnLayout>
            </Container>
        </PokemonContext.Provider>
    );
}

export default App;
