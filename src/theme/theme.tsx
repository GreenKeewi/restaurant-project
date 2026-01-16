import { createTheme } from "@mui/material/styles";

const typography = {
    fontFamily: "'Manrope', 'Inter', 'Poppins', sans-serif",
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

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
      xs: false; // removes the `xs` breakpoint
      sm: false;
      md: false;
      lg: false;
      xl: false;
      mobile: true; // adds the `mobile` breakpoint
      tablet: true;
      laptop: false;
      desktop: true;
    }
  }

const breakpoints = {
    values: {
        mobile: 0,
        tablet: 640,
        desktop: 1200,
    },
};

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        text: {
            primary: "#FFFFFF",
            secondary: "#B0B0B0",
            disabled: "#666666",
        },
        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },
        primary: {
            main: "#212121",
            light: "#2C2C2C",
            dark: "#121212",
        },
        secondary: {
            main: "#D8704A", // Rust/terracotta accent
            light: "#E08B6A",
            dark: "#C0603D",
        },
        error: {
            main: "#E04E41",
            light: "#EF7F67",
            dark: "#CC0B0B",
        },
        warning: {
            main: "#FFB93F",
            light: "#FFCD66",
            dark: "#FF9800",
        },
        info: {
            main: "#57B9F7",
            light: "#79D0FB",
            dark: "#2196F3",
        },
        success: {
            main: "#94A868",
            light: "#F5FDC6",
            dark: "#41521F",
        },
    },
    typography,
    breakpoints,
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        text: {
            primary: "#121212",
            secondary: "#404040",
            disabled: "#B0B0B0",
        },
        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
        primary: {
            main: "#F5F5F5",
            light: "#FFFFFF",
            dark: "#E0E0E0",
        },
        secondary: {
            main: "#D8704A", // Rust/terracotta accent
            light: "#B8563B",
            dark: "#A0483D",
        },
        error: {
            main: "#C1362E",
            light: "#E04E41",
            dark: "#8B0D00",
        },
        warning: {
            main: "#E6A800",
            light: "#FFB93F",
            dark: "#B38600",
        },
        info: {
            main: "#0066CC",
            light: "#3399FF",
            dark: "#00408F",
        },
        success: {
            main: "#2D5016",
            light: "#4A7A1F",
            dark: "#1B3509",
        },
    },
    typography,
    breakpoints,
});