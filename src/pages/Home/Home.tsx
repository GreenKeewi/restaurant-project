import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"
import { HeroSection } from "components/HeroSection"
import { useHeight } from "hooks/useHeightContext"
import { useDomRect } from "powerhooks/useDomRect"


export function Home() {

    const { ref, domRect: { height } } = useDomRect()
    const { setHeight } = useHeight()

    useEffect(()=>{
        setHeight(height);
    }, [height]);


    const [checked, setChecked] = useState(false)

    const { classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Fade
            in={checked}
            timeout={800}
        >
            <div className={classes.root}>
                <HeroSection
                    ref={ref}
                    className={classes.hero}
                />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Home })
    .create(({ theme }) => ({
        "root": {
            "display": "block",
            "height": "unset",
            "overflow": "unset",
        },
        "hero": {
            "height": "100vh",
            "minHeight": "400px",
        },
    }));