import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--dark);
  padding: 30px 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 520px) {
    text-align: center;
    font-size: 80%;
    padding: 5px;
  }
`

export const AppTitle = styled.h1`
  color: var(--light);
  font-family: 'bold';
  margin: 0;
  text-shadow: 2px 2px #333;
`
