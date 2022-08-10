import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { Icon } from 'native-base';
import { Button } from 'react-native-paper';

const CartItem = (props) => {
    const data = props.item.item;
    return (
        <View style={styles.mainList}>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={styles.img}
                    source={{ uri: 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png' }}
                />
                <Text style={{ marginTop: 30, fontSize: 20, }}>Hammad</Text>
            </View>
            <View style={{ marginRight: 20 ,flexDirection:'row',justifyContent:'center',}}>
                <Text style={{ marginTop: 30, fontSize: 20 }}>2343</Text>
                <Button icon="trash-can-outline" color='red'  size={30} onPress={() => props.removeFromCart(data.item)} />
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    mainList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: "gray"
        // justifyContent:'center'

    },
    img: {
        width: 100,
        height: 100,
    },
})