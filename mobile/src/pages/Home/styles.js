import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal:20,
  },

  logo:{
    marginBottom: 20,
  },

  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    width: 270,
    height: 50,
    backgroundColor: '#4BCB56',
    borderRadius: 50,
    padding: 10,
  },

  textLogin: {
    fontSize: 18,
    color: '#f9f9f9',
    fontWeight: 'bold'
  },

  btnCadastrar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 270,
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 50,
    padding: 10,
    borderColor: '#000',
    borderWidth: 0.3
  },

  textCadastrar: {
    fontSize: 18,
    color: '#4BCB56',
    fontWeight: 'bold',
  },
})