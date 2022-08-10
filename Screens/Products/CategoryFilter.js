import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View } from 'react-native';
import { ListItem, Badge, Text, List } from 'native-base';
import categories from '../../assets/data/categories.json'
const CategoryFilter = (props) => {

    return (
        // <ScrollView
        //     bounces={true}
        //     horizontal={true}
        //     style={{ backgroundColor: "#f2f2f2" }}
        // >
        //     <List>

        //     <ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
        //         <TouchableOpacity
        //             key={1}
        //             // onPress={() => {
        //             //     props.categoryFilter('all'), props.setActive(-1)
        //             // }}
        //         >
        //             <Badge
        //                 style={[styles.center, {margin: 5},
        //                     // props.active == -1 ? styles.active : styles.inactive
        //                 ]}
        //             >
        //                 <Text style={{ color: 'white' }}>All</Text>
        //             </Badge>
        //         </TouchableOpacity>
        //         {/* {props.categories.map((item) => (
        //               <TouchableOpacity
        //               key={item._id}
        //               onPress={() => {
        //                   props.categoryFilter(item._id), 
        //                   props.setActive(props.categories.indexOf(item))
        //               }}
        //           >
        //               <Badge
        //                   style={[styles.center, 
        //                     {margin: 5},
        //                     props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
        //                   ]}
        //               >
        //                   <Text style={{ color: 'white' }}>{item.name}</Text>
        //               </Badge>
        //           </TouchableOpacity>
        //         ))} */}
        //     </ListItem>
        //     </List>
        // </ScrollView>
        <ScrollView
            // horizontal={true}
            bounces={true}
            style={{ backgroundColor: "#f2f2f2" }}
        >

            <View style={styles.catagoriesStyle}>
                {
                    categories.map((item, index) => (
                        <TouchableOpacity key={index}
                            activeOpacity={0.6}
                            onPress={() => {

                                // props.categoryFilter(all);
                                props.setActive(item._id)
                            }}

                        >
                            <View style={[styles.center, { margin: 5 }, props.active == -1 ? styles.active : styles.inactive]} >

                                <Text key={index} style={styles.text} >{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    active: {
        backgroundColor: '#03bafc'
    },
    inactive: {
        backgroundColor: '#a0e1eb'
    },
    catagoriesText: {

        fontSize: 15,

        color: 'grey',
        fontWeight: 'bold',
    },
    catagoryTextSelected: {
        borderBottomColor: 'green',
        color: 'green',
        borderBottomWidth: 2,
        paddingBottom: 10,
    },
    catagoriesStyle: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between',

    },
    text: {
        paddingHorizontal: 15,
        backgroundColor: 'cyan',
        borderRadius: 18,
    }
})

export default CategoryFilter;