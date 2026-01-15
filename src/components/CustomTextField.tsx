import TextField from '@mui/material/TextField'
import { TextFieldProps } from '@mui/material/TextField';
import { tss } from 'tss-react/mui'
import { useState, useEffect } from 'react'
import { alpha } from '@mui/material/styles'

type PropsCustomTextField = TextFieldProps & {
    className?: string;

}

export function CustomTextField(props: PropsCustomTextField) {

    const { className, label, type, required = false, ...otherProps } = props
    const { cx, classes } = useStyles()
    const [error, setError] = useState<boolean>(false)
    const [minValue, setMinValue] = useState<string>('');

    useEffect(() => {
        if (type === 'date') {
            const today = new Date();
            const formattedDate = today.toISOString().split('T')[0];
            setMinValue(formattedDate);
        } else if (type === 'time' && props.value && props.value === minValue.split('T')[0]) {
            const now = new Date();
            const formattedTime = now.toTimeString().split(':')[0] + ':' + now.toTimeString().split(':')[1];
            setMinValue(formattedTime);
        }
    }, [type, props.value]);

    const handleValidation = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (required && event.target.value === "") {
            setError(true)
        } else {
            setError(false)
        }
    }

    return (
        <TextField
            className={cx(classes.textField, className)}
            label={label}
            type={type}
            variant="standard"
            size="medium"
            color="secondary"
            required={required}
            error={error}
            helperText={error ? "This field is required" : ""}
            onChange={handleValidation}

            InputLabelProps={{
                shrink: true,
                classes: {
                    "focused": classes.focused,
                },
            }}

            InputProps={{
                classes: {
                    "input": classes.input,
                    "underline": classes.inputUnderline,
                },
                inputProps: {
                    min: minValue,
                },
            }}

            {...otherProps} // Rest of the props to TextField

        />
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "textField": {
            "width": "100%",

            "& .MuiFormLabel-root": {
                "color": theme.palette.text.secondary,
                "fontSize": "0.95rem",
            },
            
            "& .MuiFormHelperText-root": {
                "margin": "10px 0 0 0",
                "padding": 0,
                "lineHeight": 1,
            },
        },
        "focused": {
            "color": `${theme.palette.secondary.main} !important`,
        },
        "input": { 
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": "1rem",
            "padding": theme.spacing(1, 0),
        },
        "inputUnderline": {
            "&:before": {
                borderBottomColor: `${theme.palette.secondary.main}33`,
                borderBottomWidth: "1px",
            },
            "&:hover:not(.Mui-disabled):before": {
                borderBottomColor: `${theme.palette.secondary.main}66`,
                borderBottomWidth: "2px",
            },
            "&:after": {
                borderBottomColor: theme.palette.secondary.main,
                borderBottomWidth: "2px",
            },
        },
        "inputLabel": {
            "fontStyle": "normal",
        },
    }))