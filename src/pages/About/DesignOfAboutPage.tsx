import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { restaurantDetail } from "data/RestaurantDetail";
import { keyframes } from "tss-react";

type PropsDesignOfAboutPage = {
  className?: string;
};

export function DesignOfAboutPage(props: PropsDesignOfAboutPage) {
  const { className } = props;

  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.about}>
        <Typography className={classes.logo} variant="h4">
          Bowls n Buns
        </Typography>
        <Typography variant="body2" className={classes.describe}>
          Hi there, I am Bowls n Buns' founder, Harshith. I started this restaurant because I'm passionate about making tasty and healthy dishes. At Bowls n Buns, we use locally sourced, fresh ingredients to create dishes that are not only delicious but also healthy. Our cuisine, which combines flavors from throughout the world, is intended to satisfy a wide range of tastes while keeping nutrition and health in mind. We are committed to giving each and every one of our customers excellent service and a warm environment.
        </Typography>
      </div>

      <div className={classes.info}>
        <div className={classes.infoDetail}>
          <Typography variant="body1" className={classes.infoHeading}>
            Opening Times
          </Typography>

          <div className={classes.openingHoursContainer}>
            {restaurantDetail.openingTime.map((time, index) => (
              <div key={index} className={classes.openingHours}>
                <Typography variant="body2">{time.days}</Typography>
                <Typography variant="body2">{time.hours}</Typography>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.infoDetail}>
          <Typography variant="body1" className={classes.infoHeading}>
            Find Us
          </Typography>

          <Button
            variant="contained"
            color="secondary"
            startIcon={<LocationOnIcon />}
            href="https://www.google.com/maps/place/9060+Louis+St.+Laurent+Ave,+Milton,+ON+L9T+0J9/@43.5070281,-79.8363614,892m/data=!3m1!1e3!4m6!3m5!1s0x882b6f496ddd7bd3:0x84da75f7e3be527e!8m2!3d43.5070281!4d-79.8363614!16s%2Fg%2F11whgw2tly?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.mapButton}
          >
            View on Google Maps
          </Button>

          <Typography variant="body2">{restaurantDetail.address}</Typography>

          <Typography variant="body2">{restaurantDetail.phone}</Typography>
        </div>
      </div>
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

const useStyles = tss.withName({ DesignOfAboutPage }).create(({ theme }) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    gap: theme.spacing(3),
    opacity: 0,
    animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

    [theme.breakpoints.down("desktop")]: {
      paddingTop: theme.spacing(2),
    },
  },
  about: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    border: `1px solid ${theme.palette.secondary.main}33`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
    alignItems: "flex-start",
    background: theme.palette.background.paper,
    boxShadow: `0 4px 20px ${theme.palette.secondary.main}15`,
    transition: "all 0.3s ease",

    "&:hover": {
      borderColor: `${theme.palette.secondary.main}66`,
      boxShadow: `0 6px 30px ${theme.palette.secondary.main}25`,
    },

    [theme.breakpoints.only("mobile")]: {
      padding: theme.spacing(3),
    },
  },
  logo: {
    fontWeight: 800,
    whiteSpace: "nowrap",
    color: theme.palette.text.primary,
    position: "relative",
    paddingBottom: theme.spacing(1),
    
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "60px",
      height: "3px",
      background: theme.palette.secondary.main,
      borderRadius: "2px",
    },
  },
  describe: {
    margin: 0,
    padding: 0,
    width: "100%",
    fontSize: "1.05rem",
    lineHeight: 1.8,
    fontWeight: 400,
    opacity: 0.95,
    color: theme.palette.text.secondary,
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(3),
    flexGrow: 1,

    [theme.breakpoints.down("desktop")]: {
      height: "auto",
      flexDirection: "column",
    },
  },
  infoHeading: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: "1.1rem",
  },
  infoDetail: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2.5),
    border: `1px solid ${theme.palette.secondary.main}33`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    flexGrow: 1,
    background: theme.palette.background.paper,
    boxShadow: `0 4px 20px ${theme.palette.secondary.main}15`,
    transition: "all 0.3s ease",

    "&:hover": {
      borderColor: `${theme.palette.secondary.main}66`,
      boxShadow: `0 6px 30px ${theme.palette.secondary.main}25`,
    },
  },
  openingHoursContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    width: "100%",
  },
  openingHours: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    transition: "background 0.2s ease",
    
    "&:hover": {
      background: `${theme.palette.secondary.main}10`,
    },
  },
  mapButton: {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(1.5, 3),
    fontWeight: 600,
    textTransform: "none",
    fontSize: "1rem",
    
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: `0 6px 20px ${theme.palette.secondary.main}40`,
    },
    
    transition: "all 0.3s ease",
  },
}));
