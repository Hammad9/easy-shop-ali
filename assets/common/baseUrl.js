import { Platform } from 'react-native';

let baseURL = '';

{
  Platform.OS == 'android'
    ? (baseURL = 'http://192.168.100.45:3000/api/v1/')
    : (baseURL = 'http://192.168.100.45:3000/api/v1/');
}

export default baseURL;


export const imageBaseUrl = "http://192.168.100.45:3000/"