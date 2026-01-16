export type ListOfDishes = {
    nameOfDish: string;
    price: string;
    details?: string;
    image?: string;
}

export const starters: ListOfDishes[] = [
    {
        nameOfDish: "Stacked Crunch Burger",
        price: "3.50",
        details: "Chicken, Smash Patty, Falafel, Vegan Meat",
        image: "/food-images/burger.png"
    },
    {
        nameOfDish: "Popcorn Chicken",
        price: "3.50",
        image: "/food-images/popcorn-chicken.png"
    }
]

export const mains: ListOfDishes[] = [
    {
        nameOfDish: "Fries",
        price: "2.50",
        image: "/food-images/fries.png"
    },
    {
        nameOfDish: "Loaded Fries",
        price: "4.50",
        image: "/food-images/loaded-fries.png"
    },
    {
        nameOfDish: "Build-Your-Own Bowls",
        price: "8.50-10.99",
        details: "Step 1: Pick your protein (Chicken, Falafel, Beef)\nStep 2: Choose your setting (On rice, On fries, Mixed)\nStep 3: Choose your sauces\nPrices: Small 8.50 / Medium 9.99 / Large 10.99",
        image: "/food-images/riceBowl.png"
    }
]

export const desserts: ListOfDishes[] = [
    {
        nameOfDish: "Ice Cream Scoop",
        price: "4.50"
    },
    {
        nameOfDish: "Vanilla Shake",
        price: "5.50"
    },
    {
        nameOfDish: "Chocolate Shake",
        price: "4.99"
    },
    {
        nameOfDish: "Strawberry Shake",
        price: "4.99"
    }
]

export const drinks: ListOfDishes[] = [
    {
        nameOfDish: "Iced Tea",
        price: "2.50"
    },
    {
        nameOfDish: "Pop",
        price: "3.50"
    },
    {
        nameOfDish: "Orange Juice",
        price: "4.99"
    },
    {
        nameOfDish: "Chocolate Milk",
        price: "4.99"
    }
]