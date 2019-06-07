/* General CSS file to manage JS style object as a CSS class to re-use them along the app  */

import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  mainContainer:{
    borderWidth:0, 
    borderColor:'gray', 
    marginTop:20, 
    marginRight:10, 
    marginLeft:10, 
    padding:5, 
    height:150, 
    borderRadius:10,                 
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 5.41,
    elevation: 2,
    backgroundColor : "white",
    zIndex:999,
    overflow:'visible'
  },

  titleStyle:{
    fontSize:20, 
    paddingTop:20, 
    paddingBottom:5, 
    textAlign:'center', 
    color:'white', 
    fontWeight:'bold'
  },

  buttonLoad:{
    borderWidth:1, 
    borderColor:'#e45b14', 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    alignContent:'center'
  },
  
  buttonLoadText: {
    fontSize:20, 
    fontWeight:'bold', 
    color:'white'
  },

  loaderStyle: {
    marginTop:20, 
    padding:10, 
    justifyContent:'center', 
    alignItems:'center'
  },

  horizontalLine: {
    borderBottomWidth:1, 
    borderBottomColor:'lightgray', 
    marginBottom:10
  },

  drinksImageContainer: {
    flex:2, 
    alignItems:'center', 
    justifyContent:'center', 
    overflow:'hidden'
  },

  drinksImageStyle: {
    width: 120, 
    height:120, 
    resizeMode: 'contain', 
    borderRadius:10
  },
  
  drinksAttributeContainer: {
    flex:2, 
    justifyContent:'center', 
    marginLeft:20
  },

  drinkNameStyle: {
    fontWeight:'normal', 
    color:'#404040'
  }

});
