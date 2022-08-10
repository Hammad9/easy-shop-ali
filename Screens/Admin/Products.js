import { StyleSheet, Text, View, Dimensions, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import ListItem from './ListItem';
import PRODUCTS from '../../assets/data/products.json'
import Icon from "react-native-vector-icons/FontAwesome"
import EasyButton from '../../Shared/StyledComponents/EassyButton';


var { height, width } = Dimensions.get("window")

const ListHeader = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View
            elevation={1}
            style={styles.listHeader}
        >



            <View style={styles.headerItem}></View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600' }}>Brand</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600' }}>Name</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600' }}>Category</Text>
            </View>
            <View style={styles.headerItem}>
                <Text style={{ fontWeight: '600' }}>Price</Text>
            </View>
        </View>
    )
}


const Products = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View>
            <View style={styles.buttonContainer}>
                
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("Orders")}
                >
                    <Icon name="shopping-bag" size={18} color="white" />
                    <Text style={styles.buttonText}>Orders</Text>
                </EasyButton>
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("ProductForm")}
                >
                    <Icon name="plus" size={18} color="white" />
                    <Text style={styles.buttonText}>Products</Text>
                </EasyButton>
                <EasyButton
                    secondary
                    medium
                    onPress={() => props.navigation.navigate("Categories")}
                >
                    <Icon name="plus" size={18} color="white" />
                    <Text style={styles.buttonText}>Categories</Text>
                </EasyButton>
            </View>
            <View style={{ marginTop: 10, marginBottom: 20 }}>
                <Searchbar
                    placeholder="Search"
                    // onChangeText={onChangeSearch}
                    // value={searchQuery}
                    style={{ marginHorizontal: 20, borderRadius: 50 }}
                />
            </View>
            <FlatList
                ListHeaderComponent={ListHeader}
                data={PRODUCTS}
                renderItem={({ item, index }) => {
                    return (
                        <ListItem pdata={item} />
                    )
                }}
            />
        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    listHeader: {
        flexDirection: 'row',
        padding: 5,
        backgroundColor: 'gainsboro'
    },
    headerItem: {
        margin: 3,
        width: width / 6
    },
    spinner: {
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        marginBottom: 160,
        backgroundColor: 'white'
    },
    buttonContainer: {
        margin: 20,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    buttonText: {
        marginLeft: 4,
        color: 'white'
    }
})