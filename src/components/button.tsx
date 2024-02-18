import { StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "../utils/colors";
interface SubmitButtonProps {
    onPress?: any;
    isLoading?: any;
    disabled?: any;
    title?: any;
    style?: any
}
export const SubmitButton = ({ onPress, isLoading, disabled, title, style }: SubmitButtonProps) => {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.mainTheme,
            paddingVertical: 15,
            borderRadius: 15,
            alignItems: "center"
        },
        title: {
            color: colors.white
        }
    })
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress} style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>

        </TouchableOpacity>
    )
}