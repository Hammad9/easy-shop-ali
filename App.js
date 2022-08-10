import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './Shared/Header';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Navigators/Main';
// Redux
import { Provider } from 'react-redux';
import store from './Redux/store'

LogBox.ignoreAllLogs(true);
export default function App() {
  return (

    <Provider store={store} >
      <NavigationContainer>
        <NativeBaseProvider>


          <Header />
          <Main />
          {/* <ProductContainer /> */}

        </NativeBaseProvider>

      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
