import { GoogleMap, LoadScript } from '@react-google-maps/api';


type Props = {
    className?: string;
    center: {
        lat: number;
        lng: number;
    }
};

export function Map(props: Props) {

    const { className, center } = props;

    const containerStyle = {
        width: '100%',
        height: '100%',
        minHeight: '200px',
        borderRadius: '12px',
    };

    const mapOptions = {
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [{ "color": "#212121" }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{ "visibility": "off" }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#212121" }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#757575" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#2c2c2c" }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#8a8a8a" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#000000" }]
            }
        ]
    };

    return (
        <div className={className}>
            <LoadScript
                googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE"}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={14}
                    options={mapOptions}
                >
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
