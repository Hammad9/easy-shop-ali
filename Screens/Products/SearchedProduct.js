import { StyleSheet, View, Text ,Dimensions} from 'react-native'
import React from 'react'
import { Content, Left, Body, ListItem, Thumbnail, Container, NativeBaseProvider } from 'native-base'
import { List, MD3Colors } from 'react-native-paper';

var { width } = Dimensions.get("window")

const SearchedProduct = (props) => {
  const { data } = props;
  console.log(data)
  return (
    // <Container>
    //   {
    //     productsFiltered.lenght > 0 ? (
    //       productsFiltered.map((item)=>(
    //         <ListItem 
    //           // On press = navigation
    //           key={item._id}
    //           avatar
    //         >
    //           <Left>
    //             <Thumbnail 
    //               source={{item:image ? image : 'https://media.istockphoto.com/vectors/cardboard-box-icon-carton-delivery-packaging-box-vector-design-on-vector-id1390339321?s=612x612'}}
    //             />
    //           </Left>
    //           <Body>
    //             <Text>{item.name}</Text>
    //             <Text>{item.description}</Text>
    //           </Body>
    //         </ListItem>

    //       ))
    //     ):(
    //       <View style={styles.center}>
    //         <Text style={{alignSelf:'center'}}>
    //           No product match the selected criteria 
    //         </Text>
    //       </View>
    //     )
    //   }
    // </Container>
    <View style={{marginTop:50,}}>

    <List.Section style={{ width: width }}>

      {
        
        data.length > 0 ? (
          data.map((item) => (
            <>
              <List.Subheader>Some title</List.Subheader>
              <List.Item title="First Item" left={() => <List.Icon icon="folder" />} />
              <List.Subheader>{item.name}</List.Subheader>
              <List.Subheader>{item.description}</List.Subheader>
            </>

          ))
        ) : (
          <View style={styles.center}>
            <Text style={{ alignSelf: 'center' }}>
              No product match the selected criteria
            </Text>
          </View>
        )
      }

    </List.Section>
    </View>
  )
}

export default SearchedProduct

const styles = StyleSheet.create({
  center: {
    
    justifyContent: 'center',
    alignItems: 'center'
  }
})