import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'


const methods = [
    { name: 'Cash on Delivery', value: 1 },
    { name: 'Bank Transfer', value: 2 },
    { name: 'Card Payment', value: 3 }
]

const paymentCards = [
    { name: 'Wallet', value: 1 },
    { name: 'Visa', value: 2 },
    { name: 'MasterCard', value: 3 },
    { name: 'Other', value: 4 }
]


const Payment = (props) => {

    const order = props.route.params;
    const [selected, setSelected] = useState();
    const [card, setCard] = useState();
    return (
        <View>
            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffff', paddingVertical: 20, }} >
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Chose your payment method</Text>
            </View>
            <View>
                {
                    methods.map((item, index) => {
                        return (
                            <TouchableOpacity style={{ paddingLeft: 20, paddingTop: 10, paddingBottom: 10, borderBottomColor: 'gray', borderBottomWidth: 1, flexDirection:'row',justifyContent:'space-between' }} key={item.name} onPress={() => setSelected(item.value)} >
                                <Text>{item.name}</Text>
                                <RadioButton
                                   selected={selected == item.value}
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={{ marginTop: 60, alignSelf: 'center' }}>
                <Button
                    title={"Confirm"}
                    onPress={() => props.navigation.navigate("Confirm", { order })} />
            </View>
        </View>
    )
}

export default Payment