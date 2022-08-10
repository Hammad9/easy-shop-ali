import React, { useEffect, useState } from "react"
import { 
    View, 
    Text,
    FlatList,
    Dimensions,
    TextInput,
    StyleSheet 
} from "react-native"
import EasyButton from "../../Shared/StyledComponents/EassyButton"
import baseURL from "../../assets/common/baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage"
import Products from '../../assets/data/products.json'


var { width } = Dimensions.get("window")

const Item = (props) => {
    return (
        <View style={styles.item}>
            <Text>Levi's</Text>
            <EasyButton
                danger
                medium
                onPress={() => console.log("Delete Button Pressed")}
            >
                <Text style={{ color: "white", fontWeight: "bold"}}>Delete</Text>
            </EasyButton>
        </View>
    )
}

const Categories = (props) => {

    const [categories, setCategories] = useState([]);
    const [categoryName, setCategoryName] = useState();
    const [token, setToken] = useState();
    return (
        <View style={{ position: "relative", height: "100%"}}>
            <View style={{ marginBottom: 60 }}>
                <FlatList 
                    data={Products}
                    renderItem={({ item, index }) => (
                       <Item item={item} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.bottomBar}>
                <View>
                    <Text>Add Category</Text>
                </View>
                <View style={{ width: width / 2.5 }}>
                    <TextInput 
                        value={categoryName}
                        style={styles.input}
                        onChangeText={(text) => setCategoryName(text)}
                    />
                </View>
                <View>
                    <EasyButton
                        medium
                        primary
                        onPress={() => addCategory()}
                    >
                        <Text style={{ color: "white", fontWeight: "bold"}}>Submit</Text>
                    </EasyButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomBar: {
        backgroundColor: "white",
        width: width,
        height: 60,
        padding: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        left: 0
    },
    input: {
        height: 40,
        borderColor: "gray",
        borderWidth: 1
    },
    item: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 1,
        padding: 5,
        margin: 5,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 5
    }
})

export default Categories;