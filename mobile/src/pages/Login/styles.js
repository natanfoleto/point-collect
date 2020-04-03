import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

  header:{
    paddingTop: Constants.statusBarHeight + 20,
  },

  container:{
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal:20,
    justifyContent:'center',
    alignItems:'center',
  },
  
  logo:{
    marginBottom: 20,
  },

  input:{
    height: 40,
    width: 320,
    padding: 10,

    borderColor: '#000',
    borderWidth: 0.7,
    borderRadius: 50,
    marginBottom: 15,
  },
  btnCadastrar: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 320,
    height: 40,
    
    backgroundColor: '#4BCB56',
    borderRadius: 50,
    padding: 10,
    marginTop: 12,

  },

  textCadastrar: {
    fontSize: 16,
    color: '#f9f9f9',
    fontWeight: 'bold',
  },
})