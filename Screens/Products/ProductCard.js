import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Button,
  Toast,
} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/cartActions';
import { imageBaseUrl } from '../../assets/common/baseUrl';

var { width } = Dimensions.get('window');
const ProductCard = (props) => {
  const { name, price, image, countInStock } = props;
  console.log(image);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{
          uri: image
            ? `${imageBaseUrl}${image}`
            : 'https://media.istockphoto.com/vectors/cardboard-box-icon-carton-delivery-packaging-box-vector-design-on-vector-id1390339321?s=612x612',
        }}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      {countInStock > 0 ? (
        <View style={{ marginBottom: 60 }}>
          <Button
            title='Add'
            color='green'
            onPress={() => {
              props.addItemToCart(props.id);
            }}

            // onPress={
            //     console.log("Pressed")
            // }
          />
        </View>
      ) : (
        <Text style={{ marginTop: 20 }}>Currently Unavailable</Text>
      )}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 20,
    height: width / 1.7,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    // marginLeft: 10,
    alignItems: 'center',
    elevation: 8,
    backgroundColor: 'white',
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: 'transparent',
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'orange',
    marginTop: 10,
  },
});
export default connect(null, mapDispatchToProps)(ProductCard);