import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  statusBar: {
    paddingTop: Constants.statusBarHeight, 
  },

  map: {
    flex: 1,
  },

  // ===== User ======================================
  userMarker: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#2173FF',
    borderWidth: 7,
    borderColor: 'rgba(205, 220, 250, 0.9)'
  },

  userCallout: {
    width: 270,
  },

  userText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  userPoint: {
    color: '#666',
    marginTop: 6,
  },

  // ===== Collector ======================================
  collectorMarker: {
    width: 34,
    height: 34,
    borderRadius: 4,
    borderWidth: 4,
    backgroundColor: '#333',
    borderColor: '#fff',
  },

  collectorCallout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
  },

  collectorInfo: {
    width: 230,
  },

  collectorName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },

  collectorText: {
    color: '#666',
    marginTop: 2,
  },

  collectorTelephne: {
    fontWeight: 'bold',
    marginTop: 2,
  },

  collectorEmail: {
    color: '#1E90FF',
    marginTop: 2,
  },

  collectorButton: {
    width: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  buttonSite: {
    marginTop: 7,
  },

  buttonRoute: {
    marginBottom: 7,
  },

  // ===== Search ======================================
  searchForm: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    top: 40,
    left: 25,
    right: 25,
  },

  searchInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2
  },

  // ===== Sidebar ======================================
  bottomBar: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 0,
    paddingLeft: 15,
    paddingRight: 15,
    height: 60,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#47AF50',
  },

  bottomBarButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textButton: {
    fontSize: 12,
    color: '#D8D8D8',
  }
});