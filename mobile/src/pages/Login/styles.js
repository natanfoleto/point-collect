import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  statusBar: {
    paddingTop: Constants.statusBarHeight + 20,
  },

  buttonBack: {
    paddingHorizontal: 20,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },

  input: {
    paddingHorizontal: 18,
    height: 50,
    width: 320,
    padding: 10,
    borderColor: '#000',
    borderWidth: 0.3,
    borderRadius: 25,
    marginBottom: 10,
    fontSize: 16,
  },

  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 50,
    backgroundColor: '#4BCB56',
    borderRadius: 25,
    padding: 10,
    marginTop: 12,
  },

  textLogin: {
    fontSize: 20,
    color: '#f9f9f9',
    fontWeight: 'bold',
  },
})