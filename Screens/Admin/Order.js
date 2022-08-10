import React, { useState, useCallback} from "react"
import { View, FlatList, Text} from "react-native"

import baseURL from "../../assets/common/baseUrl"
import { useFocusEffect } from "@react-navigation/native"

import OrderCard from "../../Shared/OrderCard"
import Product from '../../assets/data/products.json'


const Orders = (props) => {

    

    // useFocusEffect(
    //     useCallback(
    //         () => {
    //             getOrders();
    //         return () => {
    //             setOrderList();
    //         }
    //         },
    //         [],
    //     )
    // )


    // const getOrders = () => {
    //     axios
    //     .get(`${baseURL}orders`)
    //     .then((x) => {
    //         setOrderList(x.data);
    //     })
    //     .catch((error) => console.log(error))
    // }

    return (
        <View>
            <FlatList 
                data={Product}
                renderItem={({ item }) => (
                    <OrderCard navigation={props.navigation} {...item} editMode={true}/>
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default Orders;