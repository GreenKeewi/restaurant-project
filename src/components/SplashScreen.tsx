import { keyframes } from "tss-react";
import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";

type Props = {
  className?: string;
};

export function SplashScreen(props: Props) {
  const { className } = props;
  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="h2" className={classes.text}>
        Bowls n Buns
      </Typography>
    </div>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const useStyles = tss.withName("SplashScreen").create(({ theme }) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    opacity: 0,
    fontWeight: 800,
    color: theme.palette.text.primary,
    animation: `${fadeIn} 1.5s ease-in-out 0s 1 forwards`,
  },
}));
