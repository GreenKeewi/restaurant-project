
import { createTheme } from "@mui/material/styles";
import type { TypographyOptions } from "@mui/material/styles";

// Define the color palette
const palette = {
    primary: {
        main: "#212121", // Deep charcoal for primary surfaces
    },
    secondary: {
        main: "#E0E0E0", // Light gray for secondary text and elements
    },
    accent: {
        main: "#D8704A", // Rust/terracotta accent
    },
    background: {
        default: "#121212", // Black for the main background
        paper: "#1E1E1E", // Slightly lighter for paper elements
    },
    text: {
        primary: "#FFFFFF", // White for primary text
        secondary: "#B0B0B0", // Lighter gray for secondary text
    },
};

// Define the typography
const typography: TypographyOptions = {
    fontFamily: "'Manrope', sans-serif",
    h1: {
        fontWeight: 700,
        fontSize: "3.5rem",
    },
    h2: {
        fontWeight: 700,
        fontSize: "3rem",
    },
    h3: {
        fontWeight: 700,
        fontSize: "2.5rem",
    },
    h4: {
        fontWeight: 700,
        fontSize: "2rem",
    },
    h5: {
        fontWeight: 600,
        fontSize: "1.5rem",
    },
    h6: {
        fontWeight: 600,
        fontSize: "1.25rem",
    },
    body1: {
        fontSize: "1rem",
        lineHeight: 1.6,
    },
    button: {
        textTransform: "none" as const,
        fontWeight: 600,
    },
};

// Create the theme
const bowlsAndBunsTheme = createTheme({
    palette: palette,
    typography: typography,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: "10px 20px",
                },
                contained: {
                    backgroundColor: palette.accent.main,
                    color: palette.text.primary,
                    "&:hover": {
                        backgroundColor: "#C0603D",
                    },
                },
                outlined: {
                    borderColor: palette.accent.main,
                    color: palette.accent.main,
                    "&:hover": {
                        backgroundColor: "rgba(216, 112, 74, 0.1)",
                        borderColor: "#C0603D",
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    boxShadow: "none",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    backgroundColor: palette.background.paper,
                },
            },
        },
    },
});

export default bowlsAndBunsTheme;
