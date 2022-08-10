
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import CartIcon from '../Shared/CartIcon';
import UserNavigator from './UserNavigator';
import AdminNavigator from './AdminNavigator';
const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#e91e63",
      }}
    >
      
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="shopping-cart" color={color} size={30} />
              <CartIcon />
            </View>
          ),
        }}
      />

      {/*     
    {context.stateUser.user.isAdmin == true ? (
      <Tab.Screen
      name="Admin"
      component={AdminNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <Icon name="cog" color={color} size={30} />
        ),
      }}
    />
    ): null } */}


      <Tab.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="User"

        component={UserNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default Main

const styles = StyleSheet.create({})