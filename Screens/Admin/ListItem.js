import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighLight,
    TouchableOpacity,
    Dimensions,
    Button,
    Modal
} from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome"
var { width } = Dimensions.get("window");
import { useNavigation } from '@react-navigation/native';



const ListItem = (props) => {
    console.log(props.data)
    const [modalVisible, setModalVisible] = useState(false)
    const navigation = useNavigation(); 
    return (
        <View>
             <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            underlayColor="#E8E8E8"
                            onPress={() => {
                                setModalVisible(false)
                            }}
                            style={{ 
                                alignSelf: "flex-end",
                                position: "absolute",
                                top: 5,
                                right: 10
                            }}
                        >
                            <Icon name="close" size={20} />
                        </TouchableOpacity>
                        <Button style={styles.textStyle} title="Edit" onPress={()=>navigation.navigate("ProductForm")} />
                        <Button style={styles.textStyle} title="Delete" onPress={()=>[setModalVisible(false)]} />
                       
                    </View>
                </View>

            </Modal>
            <TouchableOpacity
                style={[styles.container]} 
                onPress={() => {
                    // navigation.navigate("ProductDetail")
                    console.log("Button Pressed")
                }}
                onLongPress={() => setModalVisible(true)}
            >
                <Image resizeMode="contain" style={styles.image} source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/24/23/08/cristiano-ronaldo-1618341_960_720.jpg' }} />
                <Text style={styles.item}>Levie's</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">Category</Text>
                <Text style={styles.item} numberOfLines={1} ellipsizeMode="tail">Cloth</Text>
                <Text style={styles.item}>$200</Text>

            </TouchableOpacity>
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 5,
        width: width
    },
    image: {
        borderRadius: 50,
        width: width / 6,
        height: 20,
        margin: 2
    },
    item: {
        flexWrap: "wrap",
        margin: 3,
        width: width / 6
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold"
    }
})