import { tss } from 'tss-react/mui'
import { alpha } from "@mui/material/styles";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import Button from '@mui/material/Button';

type CustomButtonProps = {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    icon?: React.ReactNode | boolean;
    selected?: boolean;
}

export function CustomButton(props: CustomButtonProps) {

    const { className, onClick, children, icon, selected } = props
    const { cx, classes } = useStyles({ selected: !!selected })
    const Icon = React.isValidElement(icon) ? icon : icon ? <ArrowForwardIcon /> : null

    return (
        <Button
            className={cx(classes.button, { [classes.selected]: selected }, className)}
            onClick={onClick}
        >
            {children}
            {Icon}
        </Button>
    )
}

const useStyles = tss
    .withName("CustomButton")
    .withParams<{ selected: boolean }>()
    .create(({ theme, selected }) => ({
        "button": {
            "textTransform": "none",
            "border": selected ? `2px solid ${theme.palette.secondary.main}` : `1px solid ${theme.palette.secondary.main}33`,
            "background": selected ? `${theme.palette.secondary.main}15` : "transparent",
            "color": selected ? theme.palette.secondary.main : theme.palette.text.primary,
            "padding": theme.spacing(1.5, 2.5),
            "borderRadius": theme.spacing(1),
            "fontWeight": selected ? 700 : 500,
            "transition": "all 0.3s ease",
            
            "&:hover": {
                "background": `${theme.palette.secondary.main}15`,
                "borderColor": theme.palette.secondary.main,
                "color": theme.palette.secondary.main,
                "transform": "translateY(-2px)",
                "boxShadow": `0 4px 12px ${theme.palette.secondary.main}30`,
            },
        },
        "selected": {
            "background": `${theme.palette.secondary.main}15`,
            "color": theme.palette.secondary.main,
            "borderColor": theme.palette.secondary.main,
        }
    }))