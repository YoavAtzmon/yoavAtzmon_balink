import styled from "styled-components";

export const DayCard = styled.div`
    display:flex;
    align-items:center;
    text-align: center;
    justify-content:center;
    flex-direction : column;
    background-color:#ffffff5e;
    font-family: 'Source Sans Pro';
    padding:1rem;
    width:37%;
    height:20rem;
    border-radius:0.3rem;
    margin:1.3rem;
    cursor: pointer;
    @media(min-width:1000px){
        width:25%;
    }
    @media(max-width:700px){
        width:60%;
    }
    @media(max-width:400px){
        width:70%;
        height: fit-content;
        padding: 1rem;
    }
 
`