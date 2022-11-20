import { Nutrition } from "../models/Fruit"

export default function SelectedNutrition(carbohydrates: any =null, protein: any =null, fat: any= null, calories: any =null, sugar: any =null): Nutrition {
    
    return {
        carbohydrates: carbohydrates,
        protein: protein,
        fat: fat,
        calories: calories, 
        sugar: sugar
    } 
}