import { tss } from 'tss-react/mui'
import { ListOfDishes } from "../../data/ListOfDishes"
import Typography from '@mui/material/Typography'

type PropsFoodItemStructure = {
    className?: string;
    foods: ListOfDishes[];
}

export function FoodItemStructure(props: PropsFoodItemStructure) {

    const { className, foods } = props

    const { cx, classes } = useStyles()

    return (
        <div>
            {foods.map((foods, i) => (
                <div key={i} className={cx(classes.root, className)}>
                    <div className={classes.gradient} />
                    {foods.image && (
                        <img
                            src={foods.image}
                            alt={foods.nameOfDish}
                            className={classes.foodImage}
                        />
                    )}
                    <div className={classes.textZone}>
                        <div className={classes.nameVsPrice}>
                            <Typography
                                variant='body1'
                            >
                                {foods.nameOfDish}
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
                                {foods.details}
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
            "paddingBottom": theme.spacing(2.5),
            "marginBottom": theme.spacing(2),
            "position": "relative",
            "borderBottom": `1px solid ${theme.palette.secondary.main}22`,
            "transition": "all 0.3s ease",

            "&:last-child": {
                "borderBottom": "none",
            },

            "&:hover": {
                "paddingLeft": theme.spacing(1),
                "& $gradient": {
                    "width": "6px",
                },
            },

            [theme.breakpoints.only('mobile')]: {
                "flexDirection": "column",
            },
        },
        "gradient": {
            "position": "absolute",
            "left": 0,
            "top": 0,
            "bottom": theme.spacing(2.5),
            "width": "4px",
            "borderRadius": theme.spacing(0.5),
            "background": `linear-gradient(180deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 50%, ${theme.palette.secondary.main} 100%)`,
            "transition": "width 0.3s ease",
        },
        "textZone": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(1),
            "width": "100%",
            "paddingLeft": theme.spacing(2.5),
        },
        "nameVsPrice": {
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "space-between",
            "color": theme.palette.text.primary,
            "gap": theme.spacing(2),
            "alignItems": "baseline",
            "fontWeight": 600,
        },
        "details": {
            "textAlign": "left",
            "color": theme.palette.text.secondary,
            "fontWeight": 400,
            "whiteSpace": "pre-line",
            "lineHeight": 1.6,
        },
        "foodImage": {
            "width": "60px",
            "height": "60px",
            "borderRadius": "50%",
            "objectFit": "cover",
            "flexShrink": 0,
            "border": `2px solid ${theme.palette.secondary.main}33`,
            "transition": "transform 0.3s ease, border-color 0.3s ease",
            "&:hover": {
                "transform": "scale(1.1)",
                "borderColor": theme.palette.secondary.main,
            },
        },
    }))
