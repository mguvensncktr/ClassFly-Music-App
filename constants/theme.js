import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#268578", // orange
    secondary: "#384054",   // gray

    // colors
    black: "#000000",
    white: "#FFFFFF",

    lightGray: "#8C96AA",
    lightGray2: "#919BB0",
    lightGray3: "#ABADBC",
    black2: '#515B70',
    textColor: '#201A25',
    transparent: "transparent",
    darkgray: '#898C95',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 16,
    radius: 20,
    padding: 12,
    padding2: 14,

    // font sizes
    largeTitle: 50,
    h1: 32,
    h2: 24,
    h3: 20,
    h4: 18,
    body1: 32,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "SF-Regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "SF-Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "SF-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "SF-Medium", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "SF-Bold", fontSize: SIZES.h4, lineHeight: 22 },
    h5: { fontFamily: "SF-Regular", fontSize: SIZES.h4, lineHeight: 22 },
    h6: { fontFamily: "SF-Regular", fontSize: SIZES.h3, lineHeight: 22 },
    body1: { fontFamily: "SF-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "SF-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "SF-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "SF-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "SF-Regular", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;