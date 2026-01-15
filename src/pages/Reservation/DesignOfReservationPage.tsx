import { tss } from "tss-react/mui";
//import Divider from '@mui/material/Divider'
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { keyframes } from "tss-react";
import { ReservationForm } from "pages/Reservation/ReservationForm";
import { CustomButton } from "components/CustomButton";

type PropsDesignOfReservationPage = {
  className?: string;
};

export function DesignOfReservationPage(props: PropsDesignOfReservationPage) {
  const { className } = props;
  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.objectHeading}>
        <Typography variant="h6">Reservation</Typography>
      </div>

      <Typography variant="body2" className={classes.text}>
        Secure your spot at Bowls n Buns for a fresh, flavorful experience tailored just for you.
      </Typography>

      <ReservationForm className={classes.inputForm} />

      <CustomButton className={classes.reservation}>
        Reserve Now
      </CustomButton>
    </div>
  );
}

const animate = keyframes({
  from: {
    opacity: 0,
    transform: "translate(200px, 0px)",
    filter: "blur(2px)",
  },
  to: {
    opacity: 1,
    transform: "translate(0)",
    filter: "blur(0)",
  },
});

const useStyles = tss
  .withName({ DesignOfReservationPage })
  .create(({ theme }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      gap: theme.spacing(4),
      alignItems: "center",
      borderRadius: theme.spacing(2),
      padding: theme.spacing(6, 4),
      border: `1px solid ${theme.palette.secondary.main}33`,
      background: theme.palette.background.paper,
      boxShadow: `0 4px 20px ${theme.palette.secondary.main}15`,
      overflow: "hidden",
      justifyContent: "center",
      maxWidth: "600px",
      margin: "0 auto",

      [theme.breakpoints.down("desktop")]: {
        marginTop: theme.spacing(2),
        padding: theme.spacing(5, 3),
      },

      [theme.breakpoints.only("mobile")]: {
        padding: theme.spacing(4, 2.5),
      },

      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
    },
    objectHeading: {
      color: theme.palette.secondary.main,
      textTransform: "uppercase",
      letterSpacing: "2px",
      fontWeight: 700,
      position: "relative",
      paddingBottom: theme.spacing(1),
      
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "60px",
        height: "3px",
        background: theme.palette.secondary.main,
        borderRadius: "2px",
      },
    },
    text: {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      margin: 0,
      padding: 0,
      color: theme.palette.text.secondary,
      maxWidth: "500px",
      lineHeight: 1.6,
    },
    inputForm: {
      width: "100%",
    },
    reservation: {
      border: "none",
      background: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      padding: theme.spacing(1.5, 4),
      fontWeight: 700,
      fontSize: "1rem",
      
      "&:hover": {
        background: theme.palette.secondary.dark,
        transform: "translateY(-2px)",
        boxShadow: `0 6px 20px ${theme.palette.secondary.main}40`,
      },

      transition: "all 0.3s ease",
    },
  }));
