import { LocalizedString } from "i18n"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

type PropsRestaurantDetail = {
    description: LocalizedString;
    openingTime: LocalizedString[];
    address: string;
    phone: string;
    socialUrl: {
        name: string;
        url: string;
        Icon: React.ElementType;
    }[];
}

export const restaurantDetail: PropsRestaurantDetail = {
    description: {
        en: "Welcome to Bowls n Buns, where fresh flavors meet customizable creations. Build your perfect bowl or enjoy our signature buns, crafted with quality ingredients and bold tastes. Whether you're craving something savory or looking for a quick bite, we've got you covered with options that fit your lifestyle.",
        fr: "Bienvenue chez Bowls n Buns, où les saveurs fraîches rencontrent les créations personnalisables. Construisez votre bol parfait ou savourez nos buns signature, élaborés avec des ingrédients de qualité et des goûts audacieux. Que vous ayez envie de quelque chose de savoureux ou que vous cherchiez une bouchée rapide, nous avons des options adaptées à votre style de vie."
    },
    openingTime: [
        {
            en : "Monday - Friday: 12:00 - 22:00",
            fr : "Lundi - Vendredi: 12:00 - 22:00",
        },
        {
            en: "Saturday - Sunday: 10:00 - 23:00",
            fr: "Samedi - Dimanche: 10:00 - 23:00",
        }
    ],
    address: "Rue de la Paix 75002 Paris",
    phone: "+33 1 23 45 67 89",
    socialUrl: [
        {
            name: 'facebook',
            url: "https://www.facebook.com/",
            Icon: FacebookIcon,
        },
        {
            name: 'instagram',
            url: "https://www.instagram.com/",
            Icon: InstagramIcon,
        },
        {
            name: 'twitter',
            url: "https://twitter.com/",
            Icon: TwitterIcon,
        }
    ]
}