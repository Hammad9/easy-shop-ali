import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, ScrollView, Button, Text,Image } from "react-native";
import { Thumbnail, } from 'native-base';
import { connect } from "react-redux";
import * as actions from "../../../Redux/Actions/cartActions";
var { width, height } = Dimensions.get("window");




const Confirm = (props) => {
    const confirmOrder = () => {
        return (
            setTimeout(() => {
                props.clearCart();
                props.navigation.navigate("Cart")
            })
        )
    }

    const confirm = props.route.params

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Confirm Order</Text>
                {
                    props.route.params ? (
                        <View style={{ borderWidth: 1, borderColor: "orange" }}>
                        <Text style={styles.title}>
                            Shipping To :
                        </Text>
                        <View style={{ padding: 8 }}>
                            <Text>Address: </Text>
                            <Text>Address2: </Text>
                            <Text>City:</Text>
                            <Text>Zip Code: </Text>
                            <Text>Country: </Text>
                        </View>
                        <Text style={styles.title} >Items:</Text>
                        <View style={styles.listItem}>
                            <View style={{ flexDirection: 'row', paddingLeft: 10,alignItems:'center' }} >
                                <Image
                                    style={styles.img}
                                    source={{ uri: 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png' }}
                                />
                                <Text style={{ paddingLeft: 20 }}>Hammad</Text>
                            </View>
                            <View>
                                <Text>$250</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: "center", margin: 20 }}>
                            <Button title={"Place order"} onPress={confirmOrder} />
                        </View>
                    </View>
                    ) : (
                       <View>
                            <Text>kalsjdfklsjd</Text>
                       </View>
                    )
                }
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearCart: () => dispatch(actions.clearCart)
    }
}

export default connect(null, mapDispatchToProps)(Confirm);

const styles = StyleSheet.create({
    container: {
        height: height,
        padding: 8,
        alignContent: "center",
        backgroundColor: "white",
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    title: {
        alignSelf: "center",
        margin: 8,
        fontSize: 16,
        fontWeight: "bold",
    },
    listItem: {
        flexDirection: 'row',

        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-between",
        width: width / 1.2,
    },
    body: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    img: {
        width: 100,
        height: 100,
    },
})