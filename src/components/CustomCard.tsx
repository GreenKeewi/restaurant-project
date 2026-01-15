import { tss } from 'tss-react/mui'
import { CustomButton } from './CustomButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { alpha } from '@mui/material/styles'

type PropsCustomCard = {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export function CustomCard(props: PropsCustomCard) {

    const { className, children, onClick } = props
    const { cx, classes } = useStyles()

    return (
        <div
            className={cx(classes.root, className)}
        >

            <div
                className={classes.background}
                onClick={onClick}
            ></div>

            <CustomButton className={classes.button}
                onClick={onClick}
                icon={<ArrowForwardIcon />}
            >
                {children}
            </CustomButton>

        </div>
    )
}

const useStyles = tss
    .withName("CustomCard")
    .withNestedSelectors<"button" | "background">()
    .create(({ theme, classes }) => ({
        "root": {
            "position": "relative",
            "display": "flex",
            "justifyContent": "flex-end",
            "boxSizing": "border-box",
            "borderRadius": theme.spacing(2),
            "overflow": "hidden",
            "cursor": "pointer",
            "border": `1px solid ${theme.palette.secondary.main}33`,
            "transition": "all 0.3s ease",

            [`&:hover .${classes.button}`]: {
                "color": theme.palette.text.primary,
                "background": theme.palette.secondary.main,
                "borderColor": theme.palette.secondary.main,
                "transform": "scale(1.05)",
            },
            [`&:hover .${classes.background}`]: {
                "transform": "scale(1.05)",
                "filter": "brightness(1.2)",
            },

            "&:hover": {
                "borderColor": theme.palette.secondary.main,
                "boxShadow": `0 8px 30px ${theme.palette.secondary.main}30`,
            },
        },
        "background": {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "background": `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.background.paper} 100%)`,
            "transition": "all 0.4s ease",
            "filter": "brightness(1)",

            "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 30% 50%, ${theme.palette.secondary.main}20 0%, transparent 50%)`,
            },
        },
        "button": {
            "zIndex": 1,
            "alignSelf": "flex-end",
            "padding": theme.spacing(1.5, 1.5, 1.5, 3),
            "borderRadius": `${theme.spacing(2)} 0 ${theme.spacing(2)} 0`,
            "transition": "all 0.3s ease",
            "border": `1px solid ${theme.palette.secondary.main}66`,
        }
    }))