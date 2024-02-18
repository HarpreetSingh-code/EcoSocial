import { Dimensions } from "react-native";

const percentageCalculation = (max: any, val: any) => max * (val / 100);

const fontCalculation = (height: any, width: any, val: any) => {
    const widthDimension = height > width ? width : height;
    const aspectRatioBasedHeight = (16 / 9) * widthDimension;
    return percentageCalculation(Math.sqrt(Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)), val);
};
export const responsiveFontSize = (f: any) => {
    const { height, width } = Dimensions.get("window");
    return fontCalculation(height, width, f);
};
export const responsiveHeight = (h: any) => {
    const { height } = Dimensions.get("window");
    return height * (h / 100)
}
export const responsiveWidth = (w: any) => {
    const { width } = Dimensions.get("window");
    return width * (w / 100)
}