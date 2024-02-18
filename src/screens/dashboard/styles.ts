import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({
    header: {
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "space-between"
    },
    headerTitle: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 18
    },
    profileAvatar: {
        height: 35,
        width: 35,
        borderRadius: 5
    },
    itemAvatar: {
        height: 35,
        width: 35,
        borderRadius: 100,
        marginRight: 5
    },
    itemUserName: {
        color: colors.black,
        fontSize: 18
    },
    itemdateCreated: {
        color: colors.black,
        fontSize: 13

    },
    itemImage: {
        height: 250,
        width: '100%',
        borderRadius: 20,
        marginTop: 10
    },
    itemContainer: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        margin: 5,
        borderRadius: 20,
        padding: 10,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        backgroundColor: colors.white,
        elevation: 1,
    }
})