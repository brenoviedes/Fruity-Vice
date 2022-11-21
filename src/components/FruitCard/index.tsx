import { useState, useEffect, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import Fruit, { Nutrition } from "../../models/Fruit"
import {
  DivFruitCard,
  FruitDiv,
  FruitInfo,
  Nutritions
} from './styles'

type Props = {
  fruit: Fruit
}

const FruitCard = ({ fruit }: Props) => {
  const { nutrition} = useContext(UserContext)

  const [fruitGenus, setFruitGenus] = useState<string>(fruit.genus)
  const [fruitFamily, setFruitFamily] = useState<string>(fruit.family)
  const [fruitOrder, setFruitOrder] = useState<string>(fruit.order)
  const [fruitNutritions, setFruitNutritions] = useState<Nutrition>(fruit.nutritions)

  useEffect(() => {
    setFruitGenus(fruit.genus);
    setFruitFamily(fruit.family);
    setFruitOrder(fruit.order);
    setFruitNutritions(fruit.nutritions);
  }, [fruit]);

  const fruitNutrition = Object.entries(fruitNutritions)

  return (
    <DivFruitCard>
      <FruitDiv>
        <>
          <FruitInfo><span><strong>Genus:</strong> {fruitGenus}</span></FruitInfo>
          <FruitInfo><span><strong>Family:</strong> {fruitFamily}</span></FruitInfo>
          <FruitInfo><span><strong>Order:</strong> {fruitOrder}</span></FruitInfo>
          <FruitInfo><span><strong>Nutrition Facts (per 100 grams): </strong></span></FruitInfo>
          {fruitNutrition.filter(([key]) => {
            if (nutrition === 'all') return true;
            return key === nutrition;
          }).map(([key, value]) => {
            { console.log(`${key}: ${value}`) }
            return (<Nutritions><span>{`${key}: ${value}`}</span></Nutritions>)
          })}
        </>
      </FruitDiv>
    </DivFruitCard>
  )

}

export default FruitCard