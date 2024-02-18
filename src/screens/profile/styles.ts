import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { responsiveWidth } from "../../utils/responsiveDimensions";

export default StyleSheet.create({
    backgroundContainer: {
        backgroundColor: colors.mainTheme,
        height: 300,
        width: '100%',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    tileContainer: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: "rgba(1,1,1,0.05)",
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10
    },
    tileIcon: {
        height: 25,
        width: 25
    },
    tileTitle: {
        color: colors.black,
        marginLeft: 10
    },
    stateTileContainer: {
        alignItems: "center",
        padding: 10,
        marginHorizontal: responsiveWidth(5)
    },
    stateTileTitle: {
        fontWeight: "bold",
        fontSize: 14,
        color: colors.white
    },
    stateTileStat: {
        fontSize: 12,
        color: 'rgba(253,253,253,0.7)'
    },
    profileAvatar: {
        height: 100,
        width: 100,
        borderRadius: 500,
        alignSelf: "center"
    },
    userTitle: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10
    },
    userName: {
        color: 'rgba(253,253,253,0.7)',
        marginBottom: 15
    }
})