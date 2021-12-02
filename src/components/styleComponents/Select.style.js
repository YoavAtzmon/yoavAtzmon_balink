import styled from 'styled-components';

export const Select = styled.select`
  padding: 1rem;
  margin: 3rem;
  padding-right: ${({ right }) => right || null};
  background: #ffffff00;
  border: none;
  border-radius: 0.5rem;
  width:25rem;
  font-family:inherit;
  font-size: larger;
  cursor: pointer;
  position : absolute;
  top: 11%;
  right:${({ hebrew }) => hebrew || null};
  left: ${({ english }) => english || null};
  text-align  :center ;
  option{
      background: #3d62874a;
      cursor: pointer;
    :hover{
      background: #ffffff11;
  }
}
@media(max-width:1130px){
    width: 17rem;
}
@media(max-width:865px){
    width: 20rem;
    position: relative;
    margin:0.1rem;
    padding:0.1rem;
}
@media(max-width:430px){
    width: 15rem;
    position: relative;
    margin:0.1rem;
    padding:0.1rem;
}
@media(max-width:275px){
    width: 8rem;
    position: relative;
    margin:0.1rem;
    padding:0.1rem;
}
`