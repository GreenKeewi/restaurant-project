import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { tss } from 'tss-react/mui';

import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import { DarkModeSwitch } from 'theme/DarkModeSwitch';
import { alpha } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

type PropsDrawerList = {
    className?: string;
    onCLick?: () => void;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about"

export function NavigationMenu(props: PropsDrawerList) {
    const { onCLick, onChangePage } = props
    const { classes, theme } = useStyles()

    const DrawerList = (
        <Box
            role="presentation"
            className={classes.drawer}
        >
            <div className={classes.container}>
                <List className={classes.head}>
                    <IconButton
                        className={classes.closeButton}
                        onClick={onCLick}
                    >
                        <CloseIcon />
                    </IconButton>
                    <div className={classes.extensions}>
                        <DarkModeSwitch />
                    </div>
                </List>

                <List>
                    {[{key: 'home', label: 'Home'}, {key: 'menu', label: 'Menu'}, {key: 'about', label: 'About'}].map(({key, label}) => (
                        <ListItem key={key} disablePadding >
                            <ListItemButton className={classes.text}>
                                <Typography
                                    variant="h1"
                                    fontSize={theme.typography.h3.fontSize}
                                    onClick={() => onChangePage(key as SelectedPage)}
                                >
                                    {label}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Box>
    );

    return DrawerList;
}

const useStyles = tss
    .withName("NavigationMenu")
    .create(({ theme }) => ({
        "drawer": {
            "height": "100vh",
            "width": "100vw",
            "background": theme.palette.primary.dark,
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "overflow": "hidden",
        },
        "container": {
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "height": "100%",
            "boxSizing": "border-box",
            "borderRadius": theme.spacing(2),
            "border": `1px solid ${theme.palette.secondary.light}`,
            "gap": theme.spacing(4),
        },
        "head": {
            "display": "flex",
            "justifyContent": "space-between",
            "borderBottom": `1px solid ${alpha(theme.palette.secondary.light, 0.2)}`,
            "alignItems": "center",
            "margin": `${theme.spacing(3)} ${theme.spacing(7)} 0 ${theme.spacing(7)}`,
        },
        "closeButton": {
            "border": `1px solid ${alpha(theme.palette.secondary.light, 0.5)}`,
            "borderRadius": "4px",
            "padding": theme.spacing(0.6),
            "transition": "background 0.4s ease-in-out, border 0.4s ease-in-out, color 0.4s ease-in-out",

        },
        "extensions": {
            "display": "flex",
            "gap": theme.spacing(2),
            "alignItems": "center",
        },
        "text": {
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "center",
            "fontSize": theme.typography.h4.fontSize,
        },
    }));


