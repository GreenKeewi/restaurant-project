import { tss } from 'tss-react/mui'
import { alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { CustomButton } from './CustomButton'
import { NavigationMenu } from './NavigationMenu'
import { useSelectedPage } from 'hooks/useSelectedPage';
import Typography from '@mui/material/Typography';

type PropsMenuBar = {
    className?: string;
}

export function AppBar(props: PropsMenuBar) {

    const { className } = props
    const { cx, classes } = useStyles()
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
                Menu
            </CustomButton>

            <CustomButton
                onClick={() => setSelectedPage("about")}
                selected={selectedPage === "about"}
                className={classes.button}
            >
                About
            </CustomButton>
        </div>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "justifyContent": "space-between",
            "alignItems": "center",
            "gap": theme.spacing(3),
            "padding": theme.spacing(2, 4),
            "background": alpha(theme.palette.primary.dark, 0.95),
            "backdropFilter": "blur(10px)",
            "borderBottom": `1px solid ${alpha(theme.palette.secondary.main, 0.2)}`,

            [theme.breakpoints.only('mobile')]: {
                "padding": theme.spacing(1.5, 2),
            },

            [theme.breakpoints.only('desktop')]: {
                "padding": theme.spacing(2.5, 6),
            },
        },
        "menuButton": {
            "border": `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`,
            "borderRadius": "8px",
            "padding": theme.spacing(1),
            "transition": "all 0.3s ease",
            "color": theme.palette.text.primary,
            
            "&:hover": {
                "background": alpha(theme.palette.secondary.main, 0.1),
                "borderColor": theme.palette.secondary.main,
            },
        },
        "logo": {
            "cursor": "pointer",
            "padding": `0 ${theme.spacing(2)}`,
            "fontWeight": 800,
            "fontSize": "1.5rem",
            "letterSpacing": "0.5px",
            "whiteSpace": "nowrap",
            "userSelect": "none",
            "color": theme.palette.text.primary,
            "transition": "color 0.3s ease",
            "flexGrow": 1,
            
            "&:hover": {
                "color": theme.palette.secondary.main,
            },

            [theme.breakpoints.only('mobile')]: {
                "fontSize": "1.2rem",
            },
        },
        "button": {
            [theme.breakpoints.only('mobile')]: {
                "display": "none",
            },
        },
    }))