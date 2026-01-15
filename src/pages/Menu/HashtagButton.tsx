import { tss } from 'tss-react/mui'
import React from 'react';
import Button from '@mui/material/Button';

type HashtagButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    selected?: boolean;
}

export function HashtagButton(props: HashtagButtonProps) {

    const { className, onClick, children, selected } = props
    const { cx, classes } = useStyles({ selected: !!selected })

    return (
        <Button
            className={cx(classes.button, { [classes.selected]: selected }, className)}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}

const useStyles = tss
    .withName("HashtagButton")
    .withParams<{ selected: boolean }>()
    .create(({ theme, selected }) => ({
        "button": {
            "textTransform": "none",
            "border": selected ? `2px solid ${theme.palette.secondary.main}` : `1px solid ${theme.palette.secondary.main}33`,
            "background": selected ? `${theme.palette.secondary.main}15` : "transparent",
            "color": selected ? theme.palette.secondary.main : theme.palette.text.secondary,
            "padding": theme.spacing(1.5, 3),
            "borderRadius": theme.spacing(1),
            "fontWeight": selected ? 700 : 500,
            "transition": "all 0.3s ease",
            
            "&:hover": {
                "background": `${theme.palette.secondary.main}15`,
                "borderColor": theme.palette.secondary.main,
                "color": theme.palette.secondary.main,
            },
        },
        "selected": {
            "color": theme.palette.secondary.main,
        }
    }))