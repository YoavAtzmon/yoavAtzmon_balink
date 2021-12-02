import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction : column;
    margin-top: ${(props)=>props.margin || '7rem'}
`