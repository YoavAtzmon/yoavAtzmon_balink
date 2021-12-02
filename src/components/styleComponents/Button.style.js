import styled from 'styled-components';


export const Button = styled.div`
    margin:1rem;
    cursor:pointer;
    color:white;
    font-family: inherit;
    font-size: large;
    @media screen and (max-width :150px){
        margin-right:0.625rem;
    }
    :hover{
        color:#c5c5c5;
    }
`