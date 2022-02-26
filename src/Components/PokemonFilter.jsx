import styled from "@emotion/styled";
import {useDispatch, useSelector} from "react-redux";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

function PokemonFilter() {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filter);
    return (
        <>
            <Input
                type="text"
                value={filter}
                onChange={(event) => dispatch({
                    type: "SET_FILTER",
                    payload: event.target.value,
                })}
            />
        </>
    );
}

export default PokemonFilter;