import Colors from "./Colors";
import Sizes from "./Sizes";
import Fonts from "./Fonts";

export const Theme = {
    title: 'theme',

    fonts : Fonts,
    sizes : Sizes,
    
    colors: {
        backgrounds : {
            primary: '#F0F0F0',
            primary_light: '#FFFFFF',
            primary_dark: '#E5E5E5',
        },

        text: '#212529',
        text_light: '#777777',
        text_dark: '#000000',

        text_reverse: '#eeeeee',
        text_reverse_light: '#ffffff',
        text_reverse_dark: '#dddddd',
        
        primary: '#212529',
        primary_light: '#212529ed',
        primary_dark: '#191c20',
        
        secondary: '#e6a914',//'#f37125',
        secondary_light: '#ff0',
        secondary_dark: '#E33B3D',

        ...Colors,
    },
};

export default Theme;