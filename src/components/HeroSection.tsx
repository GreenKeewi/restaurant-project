import { forwardRef, ReactNode } from "react";
import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import { AppBar } from "components/AppBar";
import { keyframes } from "tss-react";

type PropsHeroSection = {
  className?: string;
  heroText: ReactNode;
};

export const HeroSection = forwardRef<HTMLDivElement, PropsHeroSection>(
  (props, ref) => {
    const { className, heroText } = props;
    const { cx, classes } = useStyles();

    return (
      <div ref={ref} className={cx(classes.root, className)}>
        <AppBar />

        <Typography variant="h1" className={classes.heroText}>
          {heroText}
        </Typography>
      </div>
    );
  }
);

const animate = keyframes({
  from: {
    opacity: 0,
    transform: "translate(0, 100px)",
    filter: "blur(30px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0)",
    filter: "blur(0)",
  },
});

const useStyles = tss
  .withName({ HeroSection })
  .create(({ theme }) => ({
    root: {
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.background.paper} 100%)`,
      borderRadius: 0,
      color: theme.palette.text.primary,
      overflow: "hidden",
      minHeight: "70vh",
      position: "relative",

      [theme.breakpoints.only("desktop")]: {
        padding: "0 0 60px 0",
      },

      [theme.breakpoints.down("desktop")]: {
        padding: "0 0 40px 0",
        alignItems: "center",
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 50%, ${theme.palette.secondary.main}15 0%, transparent 50%)`,
        pointerEvents: "none",
      },
    },
    heroText: {
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
      position: "relative",
      zIndex: 1,
      marginTop: "auto",
      marginBottom: "auto",
      padding: theme.spacing(0, 4),

      [theme.breakpoints.only("tablet")]: {
        textAlign: "center",
        padding: theme.spacing(0, 3),
      },

      [theme.breakpoints.only("mobile")]: {
        textAlign: "center",
        fontSize: theme.typography.h3.fontSize,
        padding: theme.spacing(0, 2),
      },

      [theme.breakpoints.only("desktop")]: {
        padding: theme.spacing(0, 6),
      },
    },
  }));
