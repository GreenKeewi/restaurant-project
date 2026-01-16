import { tss } from 'tss-react/mui'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import InfoIcon from '@mui/icons-material/Info'
import { useSelectedPage } from 'hooks/useSelectedPage'

type PropsBottomNav = {
    className?: string;
}

export function BottomNav(props: PropsBottomNav) {
    const { className } = props
    const { selectedPage, setSelectedPage } = useSelectedPage()
    const { cx, classes } = useStyles()

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setSelectedPage(newValue as any)
    }

    return (
        <BottomNavigation
            value={selectedPage}
            onChange={handleChange}
            className={cx(classes.root, className)}
            showLabels
        >
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
                className={classes.action}
            />
            <BottomNavigationAction
                label="Menu"
                value="menu"
                icon={<MenuBookIcon />}
                className={classes.action}
            />
            <BottomNavigationAction
                label="About"
                value="about"
                icon={<InfoIcon />}
                className={classes.action}
            />
        </BottomNavigation>
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "position": "fixed",
            "bottom": 0,
            "left": 0,
            "right": 0,
            "backgroundColor": theme.palette.background.paper,
            "borderTop": `1px solid ${theme.palette.secondary.main}33`,
            "zIndex": 1000,
            "paddingBottom": "env(safe-area-inset-bottom)", // for mobile notches
        },
        "action": {
            "minHeight": "56px",
            "& .MuiBottomNavigationAction-label": {
                "fontSize": "0.75rem",
                "fontWeight": 500,
            },
            "&.Mui-selected": {
                "& .MuiBottomNavigationAction-label": {
                    "color": theme.palette.secondary.main,
                },
                "& svg": {
                    "color": theme.palette.secondary.main,
                },
                "position": "relative",
                "&::after": {
                    "content": '""',
                    "position": "absolute",
                    "bottom": 0,
                    "left": 0,
                    "right": 0,
                    "height": "3px",
                    "background": `linear-gradient(to top, ${theme.palette.secondary.main}, transparent)`,
                },
            },
        },
    }))