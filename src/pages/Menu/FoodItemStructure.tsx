import { tss } from 'tss-react/mui'
import { ListOfDishes } from "../../data/ListOfDishes"
import Typography from '@mui/material/Typography'
import { useResolveLocalizedString } from "i18n";

type PropsFoodItemStructure = {
    className?: string;
    foods: ListOfDishes[];
}

export function FoodItemStructure(props: PropsFoodItemStructure) {

    const { className, foods } = props

    const { cx, classes } = useStyles()

    const { resolveLocalizedString } = useResolveLocalizedString({
        "labelWhenMismatchingLanguage": true
    });

    return (
        <div>
            {foods.map((foods, i) => (
                <div key={i} className={cx(classes.root, className)}>
                    <div className={classes.gradient} />
                    <div className={classes.textZone}>
                        <div className={classes.nameVsPrice}>
                            <Typography
                                variant='body1'
                            >
                                {resolveLocalizedString(foods.nameOfDish)}
                            </Typography>

                            <Typography
                                variant='body1'
                            >
                                {foods.price}
                            </Typography>
                        </div>

                        {foods.details !== undefined &&
                            <Typography
                                variant='caption'
                                className={classes.details}
                            >
                                {resolveLocalizedString(foods.details)}
                            </Typography>
                        }
                    </div>
                </div>
            ))
            }

        </div >

    )
}

const useStyles = tss
    .withName("FoodItem")
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "gap": theme.spacing(2),
            "alignItems": "center",
            "paddingBottom": theme.spacing(2),
            "position": "relative",

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
            },
        },
        "gradient": {
            "position": "absolute",
            "left": 0,
            "top": 0,
            "bottom": theme.spacing(2),
            "width": "4px",
            "borderRadius": theme.spacing(0.5),
            "background": "linear-gradient(180deg, #ff6b35 0%, #ff8e53 50%, #ffa07a 100%)",
        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(1),
            "width": "100%",
            "paddingLeft": theme.spacing(2),
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "color": theme.palette.text.primary,
            "gap": theme.spacing(1),
        },
        "details": {
            "textAlign": "left",
            "color": theme.palette.text.primary,
            "fontWeight": "lighter",
            "whiteSpace": "pre-line",
        },
    }))
