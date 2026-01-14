import { tss } from "tss-react/mui";
import { Carousel } from "./Carousel";
import { Map } from "components/Map";
import Typography from "@mui/material/Typography";
import { restaurantDetail } from "data/RestaurantDetail";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";
import { useResolveLocalizedString } from "i18n";
import { keyframes } from "tss-react";

type PropsDesignOfAboutPage = {
  className?: string;
};

export function DesignOfAboutPage(props: PropsDesignOfAboutPage) {
  const { className } = props;

  const { resolveLocalizedString } = useResolveLocalizedString({
    labelWhenMismatchingLanguage: true,
  });

  const { t } = useTranslation({ DesignOfAboutPage });
  const { cx, classes } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.about}>
        <Typography className={classes.logo} variant="h4">
          Bowls n Buns
        </Typography>
        <Typography variant="body2" className={classes.describe}>
          Welcome to Bowls n Buns, where fresh flavors meet customizable creations. Build your perfect bowl or enjoy our signature buns, crafted with quality ingredients and bold tastes. Whether you're craving something savory or looking for a quick bite, we've got you covered with options that fit your lifestyle.
        </Typography>
      </div>

      <div className={classes.carousel}>
        <Carousel />
      </div>

      <div className={classes.info}>
        <div className={classes.infoDetail}>
          <Typography variant="body1" className={classes.infoHeading}>
            {t("opening times")}
          </Typography>

          {restaurantDetail.openingTime.map((time, index) => (
            <Typography key={index} variant="body2">
              {resolveLocalizedString(time)}
            </Typography>
          ))}
        </div>

        <div className={classes.infoDetail}>
          <Typography variant="body1" className={classes.infoHeading}>
            {t("find us")}
          </Typography>

          <Map
            className={classes.map}
            center={{
              lat: 48.8477,
              lng: 2.3446,
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
    gap: theme.spacing(2),
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
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3),
    alignItems: "flex-start",
  },
  logo: {
    fontWeight: 800,
    whiteSpace: "nowrap",
  },
  describe: {
    margin: 0,
    padding: 0,
    width: "100%",
    fontSize: "1rem",
    lineHeight: 1.8,
    fontWeight: 400,
    opacity: 0.9,
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
    gap: theme.spacing(2),
    flexGrow: 1,

    [theme.breakpoints.down("desktop")]: {
      height: theme.spacing(40),
    },
  },
  infoHeading: {
    color: theme.palette.secondary.dark,
  },
  infoDetail: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    flexGrow: 1,
    overflow: "hidden",
  },
  map: {
    borderRadius: theme.spacing(2),
    [theme.breakpoints.only("mobile")]: {
      display: "none",
    },
  },
}));

export const { i18n } = declareComponentKeys<"opening times" | "find us">()({
  DesignOfAboutPage,
});
