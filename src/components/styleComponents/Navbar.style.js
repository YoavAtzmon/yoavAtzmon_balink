import styled from 'styled-components';

export const Navbar = styled.div`

    background-color: #0000ffab;
    height: 6rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left:2.5rem;
    padding-right:${(props)=>props.padd || null} ;

    @media screen and (max-width:250px){
        justify-content: center;
        padding-left: 0rem;
        padding-right: 0rem;
        height: 6.5rem;
    }
`