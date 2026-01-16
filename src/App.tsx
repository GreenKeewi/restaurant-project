import { GlobalStyles } from "tss-react";
import { tss } from "tss";
import { useEffect, Suspense, lazy } from "react";
import { useSelectedPage } from "hooks/useSelectedPage";
import { SplashScreen } from "components/SplashScreen";
import { BottomNav } from "components/BottomNav";

const Home = lazy(() => import("pages/Home"));
const Menu = lazy(() => import("pages/Menu"));
const About = lazy(() => import("pages/About"));

export function App() {
  const { selectedPage } = useSelectedPage();
  const { classes, theme, scrollbarStyles } = useStyles();

  // This is for the theme color of the browser, it will take effect when the user is on mobile
  useEffect(() => {
    const existingMeta = document.querySelector("meta[name='theme-color']");
    if (existingMeta !== null) {
      existingMeta.remove();
    }

    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = theme.palette.background.default;
    document.head.appendChild(meta);
  }, [theme.palette.mode]);

  return (
    <>
      <GlobalStyles
        styles={{
          "html, body": {
            margin: 0,
            padding: 0,
          },
          html: {
            colorScheme: theme.palette.mode,
            backgroundColor: theme.palette.background.default,
          },
          body: {
            ...scrollbarStyles,
          },
        }}
      />
      <div className={classes.root}>
        <Suspense
          fallback={
            <div className={classes.fallback}>
              <SplashScreen />
            </div>
          }
        >
          {(() => {
            switch (selectedPage) {
              case "home":
                return <Home />;
              case "menu":
                return <Menu />;
              case "about":
                return <About />;
            }
          })()}
        </Suspense>
        <BottomNav />
      </div>
    </>
  );
}

const useStyles = tss.create(({ theme }) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
    color: theme.palette.text.primary,
    paddingBottom: "56px", // height of bottom nav

    [theme.breakpoints.down("desktop")]: {
      overflow: "hidden",
      height: "100vh",
    },
  },
  fallback: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: 'url(/path/to/your/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',
  },
}));
