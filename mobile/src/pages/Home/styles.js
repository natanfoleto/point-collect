import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  logo:{
    marginBottom:40,
    width:300,
  },

  btnCadastrar: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 230,
    height: 40,
    
    backgroundColor: '#f9f9f9',
    borderRadius: 50,
    padding: 10,
    marginBottom: 12,

    
    borderColor: '#000',
    borderWidth: 0.5

  },

  textCadastrar: {
    fontSize: 16,
    color: '#4BCB56',
    fontWeight: 'bold',
  },

  btnLogin: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 235,
    height: 40,

    backgroundColor: '#4BCB56',
    borderRadius: 50,
    padding: 10,

  },

  textLogin: {
    fontSize: 16,
    color: '#f9f9f9',
    fontWeight: 'bold'
  }

})