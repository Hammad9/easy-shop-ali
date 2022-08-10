import { StyleSheet, Image, SafeAreaView, View } from "react-native"
import React from 'react'


const Header = () => {
    return (
        <SafeAreaView style={styles.header}>
            <Image
                source={require("../assets/Logo.png")}
                resizeMode="contain"
                style={{ height: 50 }}
            />
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        marginTop:30,
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20
    }
})