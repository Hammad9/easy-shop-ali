import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import Cart from '../Screens/Cart/Cart'
import Checkout from '../Screens/Cart/Checkout/Checkout'
import CheckoutNavigator from './CheckoutNavigator'

const Stack = createStackNavigator()
function MyStack(){
    return(
        <Stack.Navigator>
        <Stack.Screen 
            name='Cart'
            component={Cart}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name='Checkout'
            component={CheckoutNavigator}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
    )
}


const CartNavigator = () => {
  return <MyStack />
}

export default CartNavigator

const styles = StyleSheet.create({})