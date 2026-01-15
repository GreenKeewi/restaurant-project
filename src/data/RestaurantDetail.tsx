import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

type PropsRestaurantDetail = {
    description: string;
    openingTime: {
        days: string;
        hours: string;
    }[];
    address: string;
    phone: string;
    socialUrl: {
        name: string;
        url: string;
        Icon: React.ElementType;
    }[];
}

export const restaurantDetail: PropsRestaurantDetail = {
    description: "Welcome to Bowls n Buns, where fresh flavors meet customizable creations. Build your perfect bowl or enjoy our signature buns, crafted with quality ingredients and bold tastes. Whether you're craving something savory or looking for a quick bite, we've got you covered with options that fit your lifestyle.",
    openingTime: [
        {
            days: "Monday - Friday",
            hours: "7:00 AM - 1:00 AM"
        },
        {
            days: "Saturday - Sunday",
            hours: "11:00 AM - 7:00 PM"
        }
    ],
    address: "Milton, Ontario, Canada",
    phone: "+1 (905) 123-4567",
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