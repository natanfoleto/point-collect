import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  statusBar: {
    paddingTop: Constants.statusBarHeight, 
  },

  map: {
    flex: 1,
    marginBottom: 50,
  },

  marker: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#2173FF',
    borderWidth: 7,
    borderColor: 'rgba(205, 220, 250, 0.9)'
  },

  markerCollector: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#a11',
    borderWidth: 7,
    borderColor: 'rgba(100, 020, 250, 0.9)'
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
    flexDirection: 'row',
    top: 40,
    left: 20,
    right: 20,
    zIndex: 5,
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginLeft: 10,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },

  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 5
  },

  initForm: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 70,
    height: 70,
    left: 0,
    right: 0,
  },

  initButton: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 5,
  },

  textInit: {
    color: '#666'
  },

  sideBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F9F9F9',
  },

  sideBarButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});