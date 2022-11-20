import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: auto;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export const SearchDiv = styled.div`
  justify-content: flex-end;
  display: flex;
  background-color: var(--light);

  @media only screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  width: 350px;
  height: 40px;
  outline: none;
  padding: 0 10px;
  font-size: 100%;
  border: 1px solid var(--dark);
  color: var(--dark);
  font-family: 'regular';
  background-color: var(--light);

  @media only screen and (max-width: 380px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  width: auto;
  padding: 0 10px;
  height: 42px;
  border: none;
  border: 1px solid var(--dark);
  border-left: none;
  background-color: var(--blue);
  cursor: pointer;
  color: var(--light);
`;

export const FruitNotFound = styled.span`
  justify-content: center;
  display: flex;
  font-family: 'regular';
  margin-top: 100px;
  font-size: 150%;
  color: var(--dark);
`;

export const SelectNutritions = styled.select`
  height: auto;
  border: 2px solid #d5b8ff;
  background-color: #fff;
  // border-radius: 10px;
  padding: 0 10px;
  margin-right: 10px;
  font-family: 'bold';

  @media (max-width: 600px) {
    text-align: center;
  }
`

export const NutriotionsOption = styled.option`
  font-size: 100%;
  color: #8c14fc;
  font-family: 'regular';

  @media (max-width: 600px) {
    text-align-last: center;
  }
`
