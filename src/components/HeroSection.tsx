import { forwardRef, useState, useEffect, ReactNode } from "react";
import { tss } from "tss-react/mui";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { keyframes } from "tss-react";
import { useSelectedPage } from "hooks/useSelectedPage";

type PropsHeroSection = {
  className?: string;
  heroText?: ReactNode;
};

export const HeroSection = forwardRef<HTMLDivElement, PropsHeroSection>(
  (props, ref) => {
    const { className, heroText } = props;
    const { setSelectedPage } = useSelectedPage();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
      { webp: '/food-images/riceBowl.webp', fallback: '/food-images/riceBowl.png' },
      { webp: '/food-images/burgerAndPopcorn.webp', fallback: '/food-images/burgerAndPopcorn.png' }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 10000);

      return () => clearInterval(interval);
    }, []);

    const { cx, classes } = useStyles();

    // Detect WebP support
    const supportsWebP = () => {
      const elem = document.createElement('canvas');
      if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    };

    const currentImage = images[currentImageIndex];
    const backgroundImage = supportsWebP() ? currentImage.webp : currentImage.fallback;

    return (
      <div 
        ref={ref} 
        className={cx(classes.root, className)}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className={classes.overlay}></div>
        <div className={classes.content}>
          {heroText ? (
            <Typography variant="h1" className={classes.brandName}>
              {heroText}
            </Typography>
          ) : (
            <>
              <picture className={classes.logoContainer}>
                <source srcSet="/food-images/logo.webp" type="image/webp" />
                <img 
                  src="/food-images/logo.png" 
                  alt="Bowls & Buns Logo" 
                  className={classes.logo}
                />
              </picture>
              <Typography variant="h1" className={classes.brandName}>
                Bowls n Buns
              </Typography>
              <Typography variant="h5" className={classes.tagline}>
                Fresh, flavorful bowls and buns made with love
              </Typography>
            </>
          )}
          <div className={classes.buttons}>
            <Button
              variant="contained"
              className={classes.primaryButton}
              onClick={() => setSelectedPage("menu")}
            >
              View Menu
            </Button>
          </div>
        </div>
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
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 0,
      color: theme.palette.text.primary,
      overflow: "hidden",
      position: "relative",
      transition: 'background-image 1s ease-in-out',
      width: "100%",
      height: "100%",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
      zIndex: 1,
    },
    content: {
      position: "relative",
      zIndex: 2,
      textAlign: "center",
      padding: theme.spacing(2),
      maxWidth: "600px",
    },
    logoContainer: {
      display: "block",
      marginBottom: theme.spacing(2),
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0s 1 forwards`,
    },
    logo: {
      width: "clamp(120px, 20vw, 180px)",
      height: "auto",
      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
    },
    brandName: {
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.2s 1 forwards`,
      marginBottom: theme.spacing(1),
      fontSize: "clamp(2rem, 8vw, 3.5rem)",
      fontWeight: 700,
      color: "#FFFFFF !important",
    },
    tagline: {
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.4s 1 forwards`,
      marginBottom: theme.spacing(3),
      fontSize: "clamp(1rem, 4vw, 1.5rem)",
      fontWeight: 400,
      lineHeight: 1.4,
      color: "#FFFFFF !important",
    },
    buttons: {
      opacity: 0,
      animation: `${animate} 0.5s ease-in-out 0.6s 1 forwards`,
      display: "flex",
      gap: theme.spacing(2),
      justifyContent: "center",
      flexWrap: "wrap",
    },
    primaryButton: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.primary,
      borderRadius: theme.spacing(3),
      padding: theme.spacing(1.5, 4),
      fontSize: "1.1rem",
      fontWeight: 600,
      minHeight: "48px",
      "&:hover": {
        backgroundColor: "#C0603D",
      },
    },
    secondaryButton: {
      borderColor: theme.palette.text.primary,
      color: theme.palette.text.primary,
      borderRadius: theme.spacing(3),
      padding: theme.spacing(1.5, 4),
      fontSize: "1.1rem",
      fontWeight: 600,
      minHeight: "48px",
      "&:hover": {
        backgroundColor: "rgba(255,255,255,0.1)",
      },
    },
  }));
