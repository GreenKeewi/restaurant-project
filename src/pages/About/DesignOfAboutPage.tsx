import { tss } from "tss-react/mui";
import { Carousel } from "./Carousel";
import { Map } from "components/Map";
import Typography from "@mui/material/Typography";
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
          Hello, I am Harshith, the founder of Bowls n Buns. My passion for
          creating delicious and wholesome meals inspired me to start this
          restaurant. At Bowls n Buns, we believe in using fresh, locally sourced
          ingredients to craft dishes that not only taste amazing but also
          nourish your body. Our menu is a fusion of global flavors, designed to
          cater to diverse palates while maintaining a focus on health and
          nutrition. We are committed to providing exceptional service and a
          welcoming atmosphere for all our guests. Thank you for choosing Bowls
          n Buns – we look forward to serving you!
        </Typography>
      </div>

      <div className={classes.carousel}>
        <Carousel />
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

          <Map
            className={classes.map}
            center={{
              lat: 43.5183,
              lng: -79.8774,
            }}
          />

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
  carousel: {
    flexGrow: 2,

    [theme.breakpoints.down("desktop")]: {
      height: theme.spacing(40),
    },
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
  map: {
    borderRadius: theme.spacing(2),
    border: `1px solid ${theme.palette.secondary.main}33`,
    overflow: "hidden",
    
    [theme.breakpoints.only("mobile")]: {
      display: "none",
    },
  },
}));
