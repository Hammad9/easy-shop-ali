import { StyleSheet, Text, View, Dimensions, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import * as actions from "../../Redux/Actions/cartActions";
import { List } from 'react-native-paper';
import CartItem from './CartItem';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Icon } from 'native-base';
// import { black } from 'react-native-paper/lib/typescript/styles/colors';

var { width, height } = Dimensions.get("window")

const Cart = (props) => {
    console.log(props.cartItems.quantity)

    // var total=0;
    // props.cartItems.forEach(cart=>{
    //     return(total += cart.product.price)
    // })
    return (



        // <View style={{flex:1}}>
        //     {
        //         props.cartItems.map(x=>{
        //             return(
        //                 <Text>{x.product.name}</Text>
        //                 )
        //         })
        //     }
        // </View>

        <>
            {
                props.cartItems.length ? (

                    <>
                        <View><Text style={{ alignSelf: 'center' }}>Cart</Text></View>
                        {
                            props.cartItems.map((data) => {
                                return (
                                    <CartItem item={data} />
                                )
                            })
                        }
                   
                        <View style={styles.bottomContainer}>
                            <View  >
                                <Text style={{ color: 'red', fontSize: 20 }} >$1344</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }} >
                                <Button title="Clear" onPress={() => props.clearCart()} />
                                <Button title="CheckOut"
                                    onPress={() => props.navigation.navigate('Checkout')}
                                />
                            </View>

                        </View>
                    </>
                ) : (

                    <>
                        <View style={styles.emptyContainer}>
                            <Text>Look like your Cart is Empty</Text>
                            <Text>Add Product to your Cart to get Started</Text>
                        </View>
                    </>
                )
            }
        </>
    )
}


const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems,
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () => dispatch(actions.clearCart()),
      removeFromCart: (item) => dispatch(actions.removeFromCart(item))
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

const styles = StyleSheet.create({
    emptyContainer: {
        // height: height,
        marginTop: 180,
        alignItems: "center",
        justifyContent: "center",
    },
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
    bottomContainer: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // backgroundColor: 'white',
        // elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    },
    hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 5
      },

    //   Swip github Code
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 50,
        flexWrap: 'wrap',
    },
    switch: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 2,
        paddingVertical: 10,
        width: Dimensions.get('window').width / 3,
    },
})