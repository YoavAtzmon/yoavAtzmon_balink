import styled from "styled-components";

export const TypedDiv = styled.div`
    font-family: fantasy;
    font-size: 2rem;
    @media(max-width:700px){
        font-size: 1.9rem;
    }
    @media(max-width:500px){
        font-size: 1.5rem;
    }
    @media(max-width:350px){
        font-size: 1.2rem;
    }
`