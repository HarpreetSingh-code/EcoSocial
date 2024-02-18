import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../utils/responsiveDimensions";
import colors from "../../utils/colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 15
    },
    lottieBackground: {
        height: responsiveHeight(300),
        width: responsiveWidth(250),
        position: "absolute",
        top: -responsiveHeight(95),
        left: -responsiveWidth(60),
        transform: [{ rotate: '270deg' }],
        zIndex: -1
    },
    bigLogo: {
        marginTop: 60
    },
    title: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 30
    },
    description: {
        color: colors.white,
        fontSize: 15,
        marginBottom: 20
    },
    submitBtn: {
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    }

})