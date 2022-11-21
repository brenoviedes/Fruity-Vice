import styled from 'styled-components';

export const DivFruitCard = styled.div`
  display: flex-column;
`;

export const TitleFruit = styled.h1`
  font-family: 'bold';
  font-size: 280%;
  color: var(--dark);
  margin-top: 50px;
  text-align: center;
  `;

export const FruitDiv = styled.div`
  font-family: 'regular';
  width: 70%;
  height: auto;
`;

export const FruitInfo = styled.div`
box-sizing: border-box;
font-family: 'regular';
width: 100%;
height: auto;
padding-left: 10px;
margin: 5px 0px;
`

export const Nutritions = styled.div`
  &:before {
    content: "\\27A5  ";
  }
  box-sizing: border-box;
  font-family: regular;
  width: 100%;
  height: auto;
  padding-left: 50px;

  &::after {
    content: " g";
  }
`