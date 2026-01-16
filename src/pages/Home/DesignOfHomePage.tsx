import { tss } from 'tss-react/mui'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useSelectedPage } from 'hooks/useSelectedPage';
import { keyframes } from "tss-react";


type PropsDesignOfHomePage = {
    className?: string;
}

export function DesignOfHomePage(props: PropsDesignOfHomePage) {

    const { className } = props
    const { setSelectedPage } = useSelectedPage()
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.section}>
                <Typography variant="h4" className={classes.title}>
                    Explore Our Menu
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    Discover delicious bowls and buns crafted with fresh ingredients.
                </Typography>
                <Button
                    variant="contained"
                    className={classes.ctaButton}
                    onClick={() => setSelectedPage("menu")}
                >
                    View Menu
                </Button>
            </div>

            <div className={classes.section}>
                <Typography variant="h4" className={classes.title}>
                    Learn About Us
                </Typography>
                <Typography variant="body1" className={classes.description}>
                    Our story, values, and commitment to quality food.
                </Typography>
                <Button
                    variant="contained"
                    className={classes.ctaButton}
                    onClick={() => setSelectedPage("about")}
                >
                    About Us
                </Button>
            </div>
        </div>

    )
}

const animate = keyframes({
    from: {
        opacity: 0,
        transform: "translate(200px, 0px)",
        filter: "blur(2px)"
    },
    to: {
        opacity: 1,
        transform: "translate(0)",
        filter: "blur(0)"
    }
});


const useStyles = tss
    .withName({ DesignOfHomePage })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(3),
            "padding": theme.spacing(2),
        },
        "section": {
            "backgroundColor": theme.palette.background.paper,
            "borderRadius": theme.spacing(2),
            "padding": theme.spacing(3),
            "boxShadow": "0 4px 12px rgba(0,0,0,0.3)",
            "display": "flex",
            "flexDirection": "column",
            "gap": theme.spacing(2),
            "opacity": 0,
            "animation": `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
        },
        "title": {
            "fontWeight": 700,
            "color": theme.palette.text.primary,
        },
        "description": {
            "color": theme.palette.text.secondary,
            "lineHeight": 1.6,
        },
        "ctaButton": {
            "backgroundColor": theme.palette.secondary.main,
            "color": theme.palette.text.primary,
            "borderRadius": theme.spacing(3),
            "padding": theme.spacing(1.5, 3),
            "fontWeight": 600,
            "alignSelf": "flex-start",
            "minHeight": "48px",
            "&:hover": {
                "backgroundColor": "#C0603D",
            },
        },
    }))