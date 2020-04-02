import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    map: {
      flex: 1
    },

    marker: {
      width: 30,
      height: 30,
      borderRadius: 50,
      backgroundColor: '#2173FF',
      borderWidth: 7,
      borderColor: 'rgba(205, 220, 250, 0.9)'
    },

    callout: {
      width: 260,
    },

    be: {
      fontWeight: 'bold',
      fontSize: 16,
    },

    point: {
      color: '#666',
      marginTop: 6,
    },

    searchForm: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      zIndex: 5,
      flexDirection: 'row'
    },

    searchInput: {
      flex: 1,
      height: 50,
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      elevation: 2
    },

    loadButton: {
      width: 50,
      height: 50,
      backgroundColor: '#4BCB56',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15
    }
});