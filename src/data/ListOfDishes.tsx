import { LocalizedString } from "i18n"

import nemRan from "assets/food-nemRan.webp"
import bao from "assets/food-bao.webp"
import beer from "assets/food-beer.webp"
import bunDau from "assets/food-bunDau.webp"
import comGa from "assets/food-comGa.webp"
import comTom from "assets/food-comTom.webp"
import dimsum from "assets/food-dimsum.webp"
import phoBeef from "assets/food-phoBeef.webp"
import phoGa from "assets/food-phoGa.webp"
import riceMango from "assets/food-riceMango.webp"
import springRoll from "assets/food-springRolls.webp"
import cafe from "assets/food-cafe.webp"
import pudding from "assets/food-pudding.webp"
import boBun from "assets/food-boBun.webp"



export type ListOfDishes = {
    nameOfDish: LocalizedString;
    price: string;
    details?: LocalizedString;
    illustration: string;
}

export const starters: ListOfDishes[] = [
    {
        nameOfDish: {
            en: "Stacked Crunch Burger",
            fr: "Hamburger Croustillant Empilé",
        },
        price: "3.50",
        details: {
            en: "Chicken, Smash Patty, Falafel, Vegan Meat",
            fr: "Poulet, Smash Patty, Falafel, Viande Végétale",
        },    
        illustration: nemRan
    },
    {
        nameOfDish: {
            en: "Popcorn Chicken",
            fr: "Poulet Popcorn",
        },
        price: "3.50",
        illustration: springRoll
    }
]

export const mains: ListOfDishes[] = [
    {
        nameOfDish: {
            en: "Fries",
            fr: "Frites",
        },
        price: "2.50",
        illustration: bao
    },
    {
        nameOfDish: {
            en: "Loaded Fries",
            fr: "Frites Chargées",
        },
        price: "4.50",
        illustration: phoBeef
    },
    {
        nameOfDish: {
            en: "Build-Your-Own Bowls",
            fr: "Bols Personnalisés",
        },
        price: "8.50-10.99",
        details: {
            en: "Step 1: Pick your protein (Chicken, Falafel, Beef)\nStep 2: Choose your setting (On rice, On fries, Mixed)\nStep 3: Choose your sauces\nPrices: Small 8.50 / Medium 9.99 / Large 10.99",
            fr: "Étape 1 : Choisissez votre protéine (Poulet, Falafel, Bœuf)\nÉtape 2 : Choisissez votre base (Sur riz, Sur frites, Mélangé)\nÉtape 3 : Choisissez vos sauces\nTarifs : Petit 8,50 / Moyen 9,99 / Grand 10,99",
        },
        illustration: phoGa
    }
]

export const desserts: ListOfDishes[] = [
    {
        nameOfDish: {
            en: "Ice Cream Scoop",
            fr: "Boule de Crème Glacée",
        },
        price: "4.50",
        illustration: pudding
    },
    {
        nameOfDish: {
            en: "Vanilla Shake",
            fr: "Milk-shake à la Vanille",
        },
        price: "5.50",
        illustration: riceMango
    },
    {
        nameOfDish: {
            en: "Chocolate Shake",
            fr: "Milk-shake au Chocolat",
        },
        price: "4.99",
        illustration: bunDau
    },
    {
        nameOfDish: {
            en: "Strawberry Shake",
            fr: "Milk-shake à la Fraise",
        },
        price: "4.99",
        illustration: boBun
    }
]

export const drinks: ListOfDishes[] = [
    {
        nameOfDish: {
            en: "Iced Tea",
            fr: "Thé Glacé",
        },
        price: "2.50",
        illustration: cafe
    },
    {
        nameOfDish: {
            en: "Pop",
            fr: "Soda",
        },
        price: "3.50",
        illustration: beer
    },
    {
        nameOfDish: {
            en: "Orange Juice",
            fr: "Jus d'Orange",
        },
        price: "4.99",
        illustration: comGa
    },
    {
        nameOfDish: {
            en: "Chocolate Milk",
            fr: "Lait Chocolaté",
        },
        price: "4.99",
        illustration: comTom
    }
]