/* Drinks detail component */
/* Handles the rendering of the specific drink element passed down by the parent component  
   Component basic layout separtes rendering view into 2 flex: one for the text element attribtues and other for the image of the drink*/
   
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles/styles';

export default class DrinksDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.drinksAttributeContainer}>
            <View style={{marginBottom:10}}>
                <Text style={{fontWeight:'bold'}}>ID: {this.props.data.idDrink}</Text>
            </View>
            <View style={styles.horizontalLine} />
            <View>
                <Text style={styles.drinkNameStyle}>Name</Text>
                <Text style={{fontSize:20}}>{this.props.data.strDrink}</Text>
            </View>
        </View>
        <View style={styles.drinksImageContainer}>
            <Image style={styles.drinksImageStyle} source={{uri: this.props.data.strDrinkThumb}} />
        </View>
      </View>
    );
  }
}