import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: 'https://api.jsonbin.io', headers: {
    'secret-key': Config.JSONBIN_API_KEY
  }
});
