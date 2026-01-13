import { tss } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';




export function Carousel() {

    const { cx, classes } = useStyles();

    return (
        <div className={cx(classes.root)}>
        </div>
    )
}


const useStyles = tss
    .withName({ Carousel })
    .create(({ theme }) => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "alignContent": "center",
            "justifyContent": "center",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "borderRadius": theme.spacing(2),
            "border": `1px solid ${theme.palette.secondary.light}`,
            "background": "linear-gradient(135deg, #ff6b35 0%, #ff8e53 50%, #ffa07a 100%)",
        },
        "button": {
            "position": "absolute",
            "top": "50%",
            "transform": "translateY(-50%)",
            "justifyContent": "center",
            "borderRadius": theme.spacing(5),
            "min-width": theme.spacing(4.5),
            "height": theme.spacing(4.5),
            "padding": "0",
            "background": alpha(theme.palette.secondary.light, 0.25),
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.25)}`,
            "&:first-of-type": {
                "left": theme.spacing(3),
            },
            "&:last-of-type": {
                "right": theme.spacing(3),
            },
            "&:hover": {
                "background": alpha(theme.palette.secondary.light, 0.55),

            },
        },
    }));
