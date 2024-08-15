import styled from 'styled-components'

export const StyledLayoutList = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 0px 9px -2px rgba(112, 110, 112, 1);
  -moz-box-shadow: 0px 0px 9px -2px rgba(112, 110, 112, 1);
  box-shadow: 0px 0px 9px -2px rgba(112, 110, 112, 1);
  width: 50vw;
  background-color: white;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`
