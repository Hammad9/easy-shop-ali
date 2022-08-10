import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import TrafficLight from "./StyledComponents/TrafficLight";



import AsyncStorage from "@react-native-async-storage/async-storage";

import baseURL from "../assets/common/baseUrl";

const codes = [
  { name: "pending", code: "3" },
  { name: "shipped", code: "2" },
  { name: "delivered", code: "1" },
];

const OrderCard = (props) => {
  const [orderStatus, setOrderStatus] = useState();
  const [statusText, setStatusText] = useState();
  const [statusChange, setStatusChange] = useState();
  const [token, setToken] = useState();
  const [cardColor, setCardColor] = useState();
  
  return (
    <View style={[{ backgroundColor: cardColor }, styles.container]}>
      <View style={styles.container}>
        <Text>Order Number: #10</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>
          {/* Status: {statusText} {orderStatus} */}
          Status: Good Good

        </Text>
        <Text>
          {/* Address: {props.shippingAddress1} {props.shippingAddress2} */}
          Address: DHA phase 6 Dha phase 4
        </Text>
        <Text>City: Lahore</Text>
        <Text>Country:Pakistan</Text>
        <Text>Date Ordered: 20/9/2021</Text>
        <View style={styles.priceContainer}>
          <Text>Price: </Text>
          <Text style={styles.price}>$ 100</Text>
        </View>
        {/* {props.editMode ? (
          <View>
            <Picker
              mode="dropdown"
              iosIcon={<Icon color={"#007aff"} name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={statusChange}
              placeholder="Change Status"
              placeholderIconColor={{ color: "#007aff" }}
              onValueChange={(e) => setStatusChange(e)}
            >
              {codes.map((c) => {
                return (
                  <Picker.Item key={c.code} label={c.name} value={c.code} />
                );
              })}
            </Picker>
            <EasyButton secondary large onPress={() => updateOrder()}>
              <Text style={{ color: "white" }}>Update</Text>
            </EasyButton>
          </View>
        ) : null} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    backgroundColor: "#62B1F6",
    padding: 5,
  },
  priceContainer: {
    marginTop: 10,
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  price: {
    color: "white",
    fontWeight: "bold",
  },
});

export default OrderCard;