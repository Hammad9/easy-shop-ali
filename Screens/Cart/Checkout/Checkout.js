import { StyleSheet,Text, View, Button} from 'react-native'
import React,{useState,useEffect} from 'react'
import FormContainer from '../../../Shared/Form/FormContainer'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Input from '../../../Shared/Form/Input'



const Checkout = (props) => {
  useEffect(() => {
    setOrderItems(props.cartItems)
  
    return () => {
        setOrderItems();
    }
  }, [])

  const [ orderItems, setOrderItems ] = useState();
    const [ address, setAddress ] = useState();
    const [ address2, setAddress2 ] = useState();
    const [ city, setCity ] = useState();
    const [ zip, setZip ] = useState();
    const [ country, setCountry ] = useState();
    const [ phone, setPhone ] = useState();
    const [ user, setUser ] = useState();


    // On press Check out
    const checkOut = () => {
      console.log("orders", orderItems)
      let order = {
          city,
          country,
          dateOrdered: Date.now(),
          orderItems,
          phone,
          shippingAddress1: address,
          shippingAddress2: address2,
          status: "3",
          user,
          zip,
      }

      props.navigation.navigate("Payment", {order: order })
  }

  return (
    <KeyboardAwareScrollView
            viewIsInsideTabBar={true}
            extraHeight={200}
            enableOnAndroid={true}
        >
           <FormContainer title={"Shipping Address"} >
           <Input
                    placeholder={"Phone"}
                    name={"phone"}
                    value={phone}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setPhone(text)}
                />
                 <Input
                    placeholder={"Shipping Address 1"}
                    name={"ShippingAddress1"}
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                   <Input
                    placeholder={"Shipping Address 2"}
                    name={"ShippingAddress2"}
                    value={address2}
                    onChangeText={(text) => setAddress2(text)}
                />
                   <Input
                    placeholder={"City"}
                    name={"city"}
                    value={city}
                    onChangeText={(text) => setCity(text)}
                />
                   <Input
                    placeholder={"Zip Code"}
                    name={"zip"}
                    value={zip}
                    keyboardType={"numeric"}
                    onChangeText={(text) => setZip(text)}
                />
                 <View style={{ width: '80%', alignItems: "center" }}>
                    <Button title="Confirm" onPress={() => checkOut()}/>
                </View>
           </FormContainer>
        </KeyboardAwareScrollView>
    // <View>
    //   <FormContainer />
    // </View>
  )
}

export default Checkout

const styles = StyleSheet.create({})