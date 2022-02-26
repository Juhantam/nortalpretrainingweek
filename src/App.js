import React from "react";
import styled from "@emotion/styled";
import {CssBaseline} from "@material-ui/core";

import './App.css';

import PokemonTable from "./Components/PokemonTable";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";

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
    return (
        <Container>
            <CssBaseline/>
            <Title>Pokemon search</Title>
            <TwoColumnLayout>
                <div>
                    <PokemonFilter/>
                    <PokemonTable/>
                </div>
                <PokemonInfo/>
            </TwoColumnLayout>
        </Container>
    );
}

export default App;
