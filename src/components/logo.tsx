import { StyleSheet, Text, View } from "react-native"

export const BigLogo = ({ style }: { style?: any }) => {
    const styles = StyleSheet.create({
        container: {
            height: 150,
            width: 150,
            backgroundColor: "rgba(1,1,1,0.4)",
            borderRadius: 10,
            alignSelf: "center"
        }
    })
    return (
        <View style={[styles.container, style]}>
            <Text style={{color:"#fff", textAlign:"center", marginTop:'40%'}}>Logo here</Text>
        </View>
    )
}