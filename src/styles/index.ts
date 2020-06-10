import { StyleSheet } from 'react-native';

export const globalTheme = {
  defaultBlue: '#2089dc',
  defaultGrey: '#979797'
}

export default StyleSheet.create({
  defaultContainer: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  centerOnly: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});
