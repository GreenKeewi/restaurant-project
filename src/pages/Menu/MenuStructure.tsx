import { starters, desserts, mains, drinks } from '../../data/ListOfDishes';
import { FoodItemStructure } from './FoodItemStructure'
import { tss } from 'tss'
import Typography from "@mui/material/Typography";

type PropsMenuStructure = {
    className?: string;
    heading: string;
    foods: "starters" | "desserts" | "mains" | "drinks";
}

export function MenuStructure(props: PropsMenuStructure) {

    const { foods, heading } = props

    const { classes } = useStyles()

    const foodData = (() => {
        switch (foods) {
            case "starters":
                return starters;
            case "desserts":
                return desserts;
            case "mains":
                return mains;
            case "drinks":
                return drinks;
        }
    })();

    return (

        <div className={classes.root}>

            <Typography variant="h4" className={classes.heading}>
                {heading}
            </Typography>

            <div className={classes.foodList}>
                <FoodItemStructure foods={foodData}>
                </FoodItemStructure>
            </div>


        </div>
    )
}

const useStyles = tss
    .withName("FoodList")
    .create(({ theme, scrollbarStyles }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(3),
            "height": "100%",
            "overflow": "auto",
            "boxSizing": "border-box",
        },
        "heading": {
            "margin": 0,
        },
        "foodList": {
            "overflow": "auto",
            ...scrollbarStyles,
        },

    }))