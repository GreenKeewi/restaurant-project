import { tss } from 'tss-react/mui'
import { alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"
import { CustomButton } from './CustomButton'
import { NavigationMenu } from './NavigationMenu'
import { useSelectedPage } from 'hooks/useSelectedPage';
import Typography from '@mui/material/Typography';

type PropsMenuBar = {
    className?: string;
}

export function AppBar(props: PropsMenuBar) {

    const { t } = useTranslation({ AppBar })
    const { className } = props
    const { cx, classes, theme } = useStyles()
    const { selectedPage, setSelectedPage } = useSelectedPage()

    const [openDrawer, setOpenDrawer] = useState(false)
    const toggleDrawer = (newOpenDrawer: boolean) => () => {
        setOpenDrawer(newOpenDrawer);
    };

    return (
        <div className={cx(classes.root, className)}>
            <IconButton
                className={classes.menuButton}
                onClick={toggleDrawer(true)}
            >
                <Menu />
            </IconButton>

            <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
                <NavigationMenu
                    onCLick={toggleDrawer(false)}
                    onChangePage={setSelectedPage}
                />
            </Drawer>

            <Typography
                className={cx(classes.logo)}
                onClick={() => setSelectedPage("home")}
                variant="h6"
            >
                Bowls n Buns
            </Typography>

            <CustomButton
                onClick={() => setSelectedPage("menu")}
                selected={selectedPage === "menu"}
                className={classes.button}
            >
                {t("menu")}
            </CustomButton>

            <CustomButton
                onClick={() => setSelectedPage("about")}
                selected={selectedPage === "about"}
                className={classes.button}
            >
                {t("about")}
            </CustomButton>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "justifyContent": "center",
            "gap": theme.spacing(1),
            "padding": theme.spacing(0.8),
            "border": `1px solid ${theme.palette.primary.main}`,
            "borderRadius": theme.spacing(1),
            "background": theme.palette.primary.dark,
            "alignItems": "center",

            [theme.breakpoints.only('desktop')]: {
                "alignSelf": "flex-start",
            },
        },
        "menuButton": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
            "borderRadius": "4px",
            "padding": theme.spacing(0.6),
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",
        },
        "logo": {
            "cursor": "pointer",
            "padding": `0 ${theme.spacing(1)}`,
            "fontWeight": 800,
            "fontSize": "1.3rem",
            "letterSpacing": "-0.5px",
            "whiteSpace": "nowrap",
            "userSelect": "none",
            "color": theme.palette.text.primary,
        },
        "button": {
            [theme.breakpoints.only('mobile')]: {
                "display": "none",
            },
        },
    }))

export const { i18n } = declareComponentKeys<
    | "menu"
    | "about"
>()({ AppBar });