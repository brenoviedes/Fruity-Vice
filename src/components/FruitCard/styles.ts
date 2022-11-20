import styled from 'styled-components';

export const DivFruitCard = styled.div`
// background-color: #ccc;
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
  // background-color: green;
`;

export const FruitInfo = styled.div`
box-sizing: border-box;
font-family: 'regular';
width: 100%;
height: auto;
// border-bottom: 1px solid black;
padding-left: 10px;
margin: 5px 0px;
// background-color: red;
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
  // background-color: yellow;
`

// export const DefinitionContent = styled.div`
//   &:before {
//     content: "\\27A5  ";
//   }
//   font-family: 'regular';
//   margin: 10px 0px 10px 30px;

//   @media only screen and (max-width: 500px) {
//     margin-left: 0px;
//   }
// `;