import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

import DrinksDetails from './src/components/drinks-details'
import styles from './src/styles/styles'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded:false, dummyData:{ id: 1001, description: '777 Drink'}, records:0, pagination:4, index:0};
  }

  //ReactNative lifecycle, fetch the data from the cocktail API and initialize it as part of the state
  componentDidMount(){
    let self = this;
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    .then(function (response) {
      self.setState({data:response.data.drinks,loaded:true, length: response.data.drinks.length});
    })
  }

  // Function to handle the click event on the load more button, this will add the next 4 items of the data already fetched on the ComponentDidMount lifecycle.
  onPress = () => {
    console.log("click on LoadMore()");
    this.setState({pagination:(this.state.pagination+4)})
  }

  // Rendering function that serves as a main container for listing the drinkDetails component, data is passed down for rendering the first 4 elements to increase performance on loading the images
  // LinearGradient component used from the native expo elements
  // Make conditional rendering if data is still not loaded from the ComponentDidMount lifecycle, added a loading wine gif for a better user experience
  // Includes a ScrollView element in order to make scrollable the main details area, however separated the header title to prevent details overflows
  // Includes button at the end of the drinks loop, in order to load more data already fetched by just updating the pagination state with the last index looped through the map function
  render() {
    if(this.state.loaded){
      return (
        <View style={{flex:1}}>
          <LinearGradient  colors={['#fea373', '#FE6617', '#FE6617']}>
            <Text style={styles.titleStyle}>Random Drinks 0.1</Text>
          </LinearGradient>
          <ScrollView style={{flex:1}}>
            {
              this.state.data.map((drink, index)=>{
                if(index<this.state.pagination){
                  return(
                    <View key={drink.idDrink} style={styles.mainContainer}>
                      <DrinksDetails data={drink} />
                    </View>
                  )
                }
                else{
                  return null;
                }
              })
            }
            <LinearGradient colors={['#fe935c', '#fe8445', '#fe935c']} style={{marginTop:20, height:80, flex:1 }}>
              <TouchableOpacity style={styles.buttonLoad} onPress={this.onPress} >
                <Text style={styles.buttonLoadText}> Load More! </Text>
              </TouchableOpacity>
            </LinearGradient>
          </ScrollView>
        </View>
      );
    }else{
      return(
        <View style={[styles.container, styles.loaderStyle]}>
          <Image source={require('./assets/images/loader.gif')} />
        </View>
      );
    } 
  }
}
