import { tss } from "tss-react/mui";
import { MenuStructure } from "./MenuStructure";
import { useState } from "react";
import { Divider } from "@mui/material";
import { HashtagButton } from "./HashtagButton";
import { keyframes } from "tss-react";

type PropsDesignOfMenuPage = {
  className?: string;
};

type FoodCategory = "starters" | "mains" | "desserts" | "drinks";

export function DesignOfMenuPage(props: PropsDesignOfMenuPage) {
  const { className } = props;
  const { cx, classes } = useStyles({ selected: false });
  const [selectedCategory, setSelectedCategory] =
    useState<FoodCategory>("starters");

  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.hashtag}>
        <HashtagButton
          onClick={() => setSelectedCategory("starters")}
          selected={selectedCategory === "starters"}
        >
          Starters
        </HashtagButton>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <HashtagButton
          onClick={() => setSelectedCategory("mains")}
          selected={selectedCategory === "mains"}
        >
          Mains
        </HashtagButton>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <HashtagButton
          onClick={() => setSelectedCategory("desserts")}
          selected={selectedCategory === "desserts"}
        >
          Desserts
        </HashtagButton>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={classes.divider}
        />

        <HashtagButton
          onClick={() => setSelectedCategory("drinks")}
          selected={selectedCategory === "drinks"}
        >
          Drinks
        </HashtagButton>
      </div>

      <MenuStructure
        heading={
          selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)
        }
        foods={selectedCategory}
      ></MenuStructure>
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
  .withName({ DesignOfMenuPage })
  .withParams<{ selected: boolean }>()
  .create(({ theme }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      gap: theme.spacing(4),
      borderRadius: theme.spacing(2),
      padding: theme.spacing(4),
      border: `1px solid ${theme.palette.secondary.main}33`,
      background: theme.palette.background.paper,
      boxShadow: `0 4px 20px ${theme.palette.secondary.main}15`,
      overflow: "hidden",
      height: "100%",
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,

      [theme.breakpoints.down("desktop")]: {
        marginTop: theme.spacing(2),
      },

      [theme.breakpoints.only("mobile")]: {
        padding: theme.spacing(3),
      },
    },
    hashtag: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: theme.spacing(2),
      padding: theme.spacing(1),
      background: `${theme.palette.secondary.main}08`,
      borderRadius: theme.spacing(1.5),
    },
    divider: {
      background: `${theme.palette.secondary.main}33`,
    },
  }));
