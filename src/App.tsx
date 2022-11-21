import { useState, useContext } from "react";
import api from "./service/api";
import { TitleFruit } from "./components/FruitCard/styles";
import FruitCard from "./components/FruitCard";
import Fruit from "./models/Fruit";
import { UserContext } from "./context/UserContext";
import loading from '../src/assets/img/loading.gif'
import {
    Container,
    SearchDiv,
    SearchInput,
    SearchButton,
    FruitNotFound,
    SelectNutritions,
    NutriotionsOption,
    Loading,
} from './styles';

const App = () => {
    const { nutrition, setNutrition } = useContext(UserContext)

    const [fruitLoaded, setFruitLoaded] = useState<boolean>(true)
    const [fruit, setFruit] = useState<string>('')
    const [fruits, setFruits] = useState<Fruit>()
    const [notFound, setNotFound] = useState<string>('')
    const [title, setTitle] = useState<string>('')

    const searchFruit = async () => {

        setNotFound('')
        try {
            setFruitLoaded(false)
            const response = await api.get('/fruits/' + fruit)

            let fruits = response.data
            setFruits(fruits)
            setTitle(fruit)
            setFruitLoaded(true)
        } catch (error) {
            setFruitLoaded(true)
            setFruits(undefined)
            setNotFound(`Ops, não encontramos a fruta ' ${fruit} ' :( `)
            setTitle(fruit)
        }
    }


    return (
        <Container>
            <SearchDiv>
                { <SelectNutritions
                    value={nutrition}
                    onChange={(e) => setNutrition(e.target.value)}>
                    <NutriotionsOption value="all">All</NutriotionsOption>
                    <NutriotionsOption value="protein">Proteins</NutriotionsOption>
                    <NutriotionsOption value="carbohydrates">Carbohydrates</NutriotionsOption>
                    <NutriotionsOption value="fat">Fat</NutriotionsOption>
                    <NutriotionsOption value="sugar">Sugar</NutriotionsOption>
                </SelectNutritions>}
                <SearchInput
                    placeholder='Busque por alguma fruta'
                    value={fruit}
                    onChange={(event) => setFruit(event.target.value)} />
                <SearchButton onClick={searchFruit}>
                    <span>Buscar</span>
                </SearchButton>
            </SearchDiv>

            {fruitLoaded && (
            <>
            <TitleFruit>{title}</TitleFruit>

            {fruits && <FruitCard fruit={fruits} />}
            <FruitNotFound>{notFound}</FruitNotFound>
            </>)}

            {!fruitLoaded && <Loading src={loading} alt='Carregando frutas'/>}
        </Container>
    )
}

export default App