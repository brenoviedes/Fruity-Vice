export type Nutrition = {
    carbohydrates?: string | number
    protein?: string | number 
    fat?: string | number 
    calories?: string | number 
    sugar?: string | number 
}

export default class Fruit {
    name: string 
    genus: string
    family: string
    order: string
    nutritions: Nutrition

    constructor(obj: any) {
        const {
            name ,
            genus,
            family,
            order,
            nutritions
        } = obj

        this.name = name
        this.genus = genus 
        this.family = family 
        this.order = order 
        this.nutritions = nutritions
    }
} 