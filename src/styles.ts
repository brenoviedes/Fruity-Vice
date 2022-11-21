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
    flex-direction: column-reverse;
  }
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  width: 350px;
  height: 40px;
  outline: none;
  padding: 0 10px;
  font-size: 100%;
  border: 1px solid var(--dark);
  color: var(--dark);
  font-family: 'regular';
  background-color: var(--light);

  @media only screen and (max-width: 500px) {
    width: 100%;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const SearchButton = styled.button`
  width: auto;
  padding: 0 10px;
  height: auto;
  border: none;
  border: 1px solid var(--dark);
  border-left: none;
  background-color: var(--blue);
  cursor: pointer;
  color: var(--light);

  @media (max-width: 500px) {
    height: 42px;
  }
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
box-sizing: border-box;
  height: auto;
  border: 2px solid #d5b8ff;
  background-color: var(--light);
  padding: 0 10px;
  margin-right: 10px;
  font-family: 'bold';

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`

export const NutriotionsOption = styled.option`
  box-sizing: border-box;
  font-size: 100%;
  color: #8c14fc;
  font-family: 'regular';

  @media (max-width: 500px) {
    text-align-last: center;
    text-align: center;
  }
`
export const Loading = styled.img`
  display: block;
  width: 48px;
  margin: 50px auto 0 auto;
`
