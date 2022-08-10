import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import EasyButton from '../../Shared/StyledComponents/EassyButton'
import TrafficLight from '../../Shared/StyledComponents/TrafficLight'
import { Left, Right, Container, H1 } from 'native-base';
const SingleProduct = (props,{route,navigation}) => {
    const [item, setItem] = useState(props.route.params.item);
    const [availability, setAvailability] = useState(null);
    const [availabilityText, setAvailabilityText] = useState("")


    // useEffect(() => {
    //     if (props.route.params.item.countInStock == 0) {
    //         setAvailability(<TrafficLight unavailable></TrafficLight>);
    //         setAvailabilityText("Unvailable")
    //     } else if (props.route.params.item.countInStock <= 5) {
    //         setAvailability(<TrafficLight limited></TrafficLight>);
    //         setAvailabilityText("Limited Stock")
    //     } else {
    //         setAvailability(<TrafficLight available></TrafficLight>);
    //         setAvailabilityText("Available")
    //     }

    //     return () => {
    //         setAvailability(null);
    //         setAvailabilityText("");
    //     }
    // }, [])

    
  return (
    <Container style={styles.container}>
            <ScrollView style={{ marginBottom: 80, padding: 5 }}>
                <View>
                    <Image 
                        source={{
                            uri: item.image ? item.image 
                            : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }}
                        resizeMode="contain"
                        style={styles.image}
                    />
                </View>
                {/* Here Below is error But Why  */}
                <View style={styles.contentContainer}>
                    <Text style={styles.contentHeader}>{item.name}</Text>
                    <Text style={styles.contentText}>{item.brand}</Text>
                </View>
                <View style={styles.availabilityContainer}>
                    <View style={styles.availability}>
                        <Text style={{ marginRight: 10 }}>
                            Availability: {availabilityText}
                        </Text>
                        {availability}
                    </View>
                    <Text>{item.description}</Text>
                </View>
            </ScrollView>

            <View style={styles.bottomContainer}>
                <>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={{ color: 'white'}}>Add</Text>
                </>
                <>
                   <EasyButton 
                   primary
                   medium
                   onPress={() => {props.addItemToCart(item.id),
                        Toast.show({
                            topOffset: 60,
                            type: "success",
                            text1: `${item.name} added to Cart`,
                            text2: "Go to your cart to complete order"
                        })
                }}
                   >
                   </EasyButton>
                </>
            </View>
        </Container>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '100%'
    },
    imageContainer: {
        backgroundColor: 'white',
        padding: 0,
        margin: 0
    },
    image: {
        width: '100%',
        height: 250
    },
    contentContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentHeader: {
        fontWeight: 'bold',
        marginBottom: 20
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white'
    },
    price: {
        fontSize: 24,
        margin: 20,
        color: 'red'
    },
    availabilityContainer: {
        marginBottom: 20,
        alignItems: "center"
    },
    availability: {
        flexDirection: 'row',
        marginBottom: 10,
    }
})
