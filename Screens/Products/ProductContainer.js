import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
// import data from '../../assets/data/products.json';
import CATEGORIES from '../../assets/data/categories.json';
import ProductList from './ProductList';
import {
  Header,
  Icon,
  Input,
  NativeBaseProvider,
  Item,
  HStack,
  Box,
} from 'native-base';
import { TextInput } from 'react-native-paper';
import SearchedProduct from './SearchedProduct';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';
import { Dimensions, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';

import baseURL from '../../assets/common/baseUrl';
import axios from 'axios';

const ProductContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [productFiltered, setProductFiltered] = useState([]);
  const [focus, setFocus] = useState();
  const [categories, setCategories] = useState(CATEGORIES);
  const [productsCtg, setProductsCtg] = useState([]);
  const [active, setActive] = useState(null);
  const [initialState, setInitialState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  var { height } = Dimensions.get('window');

  useEffect(() => {
    // setProducts(data)
    // setProductFiltered(data);
    setFocus(false);
    // setCategories(categories)
    // setInitialState(data);
    setActive(-1);

    axios
      .get(`${baseURL}products/`)
      .then((res) => {
        setProducts(res.data);
        setProductFiltered(res.data);
        setProductsCtg(res.data);
        setInitialState(res.data);
        console.log('====>', res.data);
        // setLoading(false)
      })
      .catch((error) => {
        console.log(' PApi call error');
        console.log(res);
      });

    // Categories
    axios
      .get(`${baseURL}categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log('Car Api call error');
      });
    return () => {
      setProducts([]);
      setProductFiltered([]);
      setFocus();
      setCategories();
      setActive();
      setInitialState();
    };
  }, []);

  const searchedProduct = (text) => {
    console.log(text);
    setProductFiltered(
      products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase))
    );
  };

  const getFilteredProducts = () => {
    const prod = products.filter((i) => {
      console.log('===> oooo', i?.category?.$oid === active?.$oid);
      return i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (active && i?.category?.$oid === active?.$oid)
        ? true
        : false;
    });
    return prod;
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  // Categories
  const changeCtg = (ctg) => {
    {
      ctg === 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category._id === ctg),
              setActive(true)
            ),
          ];
    }
  };
  console.log('categories', active);
  return (
    <ScrollView>
      <View style={{ marginTop: 10 }}>
        <Searchbar
          style={{ marginHorizontal: 20, borderRadius: 50, marginBottom: 10 }}
          label='Search'
          onFocus={openList}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        {searchTerm.length > 0 ? (
          <Icon onPress={onBlur} name='ios-close' />
        ) : null}
        <View>
          {searchTerm.length > 0 ? (
            <SearchedProduct data={getFilteredProducts()} />
          ) : (
            <>
              <Banner />
              <View>
                <CategoryFilter
                  categories={categories}
                  categoryFilter={changeCtg}
                  productsCtg={getFilteredProducts()}
                  active={active}
                  setActive={setActive}
                />
              </View>
              {productsCtg.length > 0 ? (
                <View style={styles.listContainer}>
                  {productsCtg.map((item) => {
                    return (
                      <ProductList
                        navigation={props.navigation}
                        key={item._id}
                        item={item}
                      />
                    );
                  })}
                </View>
              ) : (
                <View style={[styles.center, { height: height / 2 }]}>
                  <Text>No products found</Text>
                </View>
              )}
              {/* <FlatList 
                numColumns={2}
                data={data}
                renderItem={({ item }) => (
                  <ProductList
                    navigation={props.navigation}
                    item={item}
                    key={item.id}
                  />
                )}
                keyExtractor={(item) => item.name}
              /> */}
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductContainer;

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: 'gainsboro',
  },
  listContainer: {
        
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "gainsboro",
      },
      center: {
          justifyContent: 'center',
          alignItems: 'center'
      }
});

// Cop All Code        ---------------------------
// import React, { useState, useCallback } from "react";
// import {
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   FlatList,
//   ScrollView,
//   Dimensions,
//   Text,
//   Input,

// } from "react-native";

// // import { Container, Header, Icon, Item, Input,} from "native-base";
// import { Searchbar } from 'react-native-paper';
// import { useFocusEffect } from '@react-navigation/native'
// import baseUrl from "../../assets/common/baseUrl"
// import axios from 'axios';

// import ProductList from "./ProductList";
// import SearchedProduct from "./SearchedProduct";
// import Banner from "../../Shared/Banner";
// import CategoryFilter from "./CategoryFilter";
// import baseURL from "../../assets/common/baseUrl";

// var { height } = Dimensions.get('window')

// const ProductContainer = (props) => {
//   const [products, setProducts] = useState([]);
//   const [productsFiltered, setProductsFiltered] = useState([]);
//   const [focus, setFocus] = useState();
//   const [categories, setCategories] = useState([]);
//   const [productsCtg, setProductsCtg] = useState([]);
//   const [active, setActive] = useState();
//   const [initialState, setInitialState] = useState([]);
//   const [loading, setLoading] = useState(true)

//   useFocusEffect((
//     useCallback(
//       () => {
//         setFocus(false);
//         setActive(-1);

//         // Products
//         axios
//           .get(`${baseURL}products`)
//           .then((res) => {
//             setProducts(res.data);
//             setProductsFiltered(res.data);
//             setProductsCtg(res.data);
//             setInitialState(res.data);
//             console.log(res.data)
//             // setLoading(false)
//           })
//           .catch((error) => {
//             console.log('Api call error')
//           })

//         // Categories
//         // axios
//         //   .get(`${baseURL}categories`)
//         //   .then((res) => {
//         //     setCategories(res.data)
//         //   })
//         //   .catch((error) => {
//         //     console.log('Api call error')
//         //   })

//         return () => {
//           setProducts([]);
//           setProductsFiltered([]);
//           setFocus();
//           setCategories([]);
//           setActive();
//           setInitialState();
//         };
//       },
//       [],
//     )
//   ))

//   // Product Methods
//   const searchProduct = (text) => {
//     setProductsFiltered(
//       products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
//     );
//   };

//   const openList = () => {
//     setFocus(true);
//   };

//   const onBlur = () => {
//     setFocus(false);
//   };

//   // Categories
//   const changeCtg = (ctg) => {
//     {
//       ctg === "all"
//         ? [setProductsCtg(initialState), setActive(true)]
//         : [
//             setProductsCtg(
//               products.filter((i) => i.category._id === ctg),
//               setActive(true)
//             ),
//           ];
//     }
//   };

//   return (
//     <>
//     {loading == false ? (
//  <View>
//  <View >
//    <View>
//      {/* <Icon name="ios-search" /> */}
//      <Input
//        placeholder="Search"
//        onFocus={openList}
//        onChangeText={(text) => searchProduct(text)}
//      />
//      {focus == true ? <Icon onPress={onBlur} name="ios-close" /> : null}
//    </View>
//  </View>

//  {focus == true ? (
//    <SearchedProduct
//    navigation={props.navigation}
//    productsFiltered={productsFiltered} />
//  ) : (
//    <ScrollView>
//      <View>
//        <View>
//          <Banner />
//        </View>
//        <View>
//          <CategoryFilter
//            categories={categories}
//            categoryFilter={changeCtg}
//            productsCtg={productsCtg}
//            active={active}
//            setActive={setActive}
//          />
//        </View>
//        {productsCtg.length > 0 ? (
//        <View style={styles.listContainer}>
//            {productsCtg.map((item) => {
//                return(
//                    <ProductList
//                        navigation={props.navigation}
//                        key={item.name}
//                        item={item}
//                    />
//                )
//            })}
//        </View>
//        ) : (
//            <View style={[styles.center, { height: height / 2}]}>
//                <Text>No products found</Text>
//            </View>
//        )}

//      </View>
//    </ScrollView>
//  )}
// </View>
//     ) : (
//       // Loading
//       <View style={[styles.center, { backgroundColor: "#f2f2f2" }]}>
//         <ActivityIndicator size="large" color="red" />
//       </View>
//     )}
//    </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexWrap: "wrap",
//     backgroundColor: "gainsboro",
//   },
//   listContainer: {
//     height: height,
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//     backgroundColor: "gainsboro",
//   },
//   center: {
//       justifyContent: 'center',
//       alignItems: 'center'
//   }
// });

// export default ProductContainer;
