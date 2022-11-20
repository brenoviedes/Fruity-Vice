import { useState, useEffect, useContext } from "react";
import api from "./service/api";
import { TitleFruit } from "./components/FruitCard/styles";
import {
    Container,
    SearchDiv,
    SearchInput,
    SearchButton,
    FruitNotFound,
    SelectNutritions,
    NutriotionsOption,
  } from './styles';
import Header from "./components/Header";
import FruitCard from "./components/FruitCard";
import Fruit, { Nutrition } from "./models/Fruit";
import { UserContext } from "./context/UserContext";
import SelectedNutrition from "./components/func";

  const App = () => {
    const {nutrition, setNutrition} = useContext(UserContext)

    const [fruit, setFruit] = useState<string>('')
    const [fruits, setFruits] = useState<Fruit>()
    const [notFound, setNotFound] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    
    const searchFruit = async () => {
      
        setNotFound('')
        try {
            const response = await api.get('/fruits/' + fruit)
            
            let fruits = response.data
            setFruits(fruits)
            setTitle(fruit)
        } catch(error) {
            setFruits(undefined)
            setNotFound(`Ops, não encontramos a fruta ' ${fruit} ' :( `)
            setTitle(fruit)
        }
    }


    return (
        <Container>
            <Header></Header>
            <SearchDiv>
                {fruits && <SelectNutritions
                        value={fruits.nutritions}
                        onChange={(e: any) => setNutrition(e.target.value)}>

                        <NutriotionsOption value={fruits.nutritions} selected>All</NutriotionsOption>
                        <NutriotionsOption value={fruits.nutritions.protein}>Proteins</NutriotionsOption>
                        <NutriotionsOption value={fruits.nutritions.carbohydrates}>Carbohydrates</NutriotionsOption>
                        <NutriotionsOption value={fruits.nutritions.fat}>Fat</NutriotionsOption>
                        <NutriotionsOption value={fruits.nutritions.sugar}>Sugar</NutriotionsOption>
                    
                </SelectNutritions>}
                <SearchInput 
                    placeholder='Busque por alguma fruta'
                    value={fruit}
                    onChange={(event) => setFruit(event.target.value)} />        
                <SearchButton onClick={searchFruit}>
                    <span>Buscar</span>
                </SearchButton>
            </SearchDiv>
            <TitleFruit>{title}</TitleFruit>
            
            {fruits && <FruitCard fruit={fruits} />}
            <FruitNotFound>{notFound}</FruitNotFound>
        </Container>
    )
  }

  export default App