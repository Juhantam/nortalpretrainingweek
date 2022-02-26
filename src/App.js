import React from "react";
import styled from "@emotion/styled";
import {CssBaseline} from "@material-ui/core";
import {createStore} from "redux";
import {Provider, useSelector, useDispatch} from "react-redux";

import './App.css';
import PokemonTable from "./Components/PokemonTable";
import PokemonInfo from "./Components/PokemonInfo";
import PokemonFilter from "./Components/PokemonFilter";

const pokemonReducer = (state = {
    pokemon: [],
    filter: "",
    selectedItem: null,
}, action) => {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };
        case "SET_POKEMON":
            return {
                ...state,
                pokemon: action.payload,
            };
        case "SET_SELECTED_ITEM":
            return {
                ...state,
                selectedItem: action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(pokemonReducer);

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

    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);

    React.useEffect(() => {
        fetch("http://localhost:3000/nortalpretrainingweek/pokemon.json")
            .then(response => response.json())
            .then((data) => dispatch({
                type: "SET_POKEMON",
                payload: data,
            }))
    }, [])

    if (!pokemon) {
        return <div>Loading data...</div>
    }

    return (
        <Container>
            <CssBaseline/>
            <Title className="title">Pokemon search</Title>
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

export default () => <Provider store={store}><App/></Provider>;
