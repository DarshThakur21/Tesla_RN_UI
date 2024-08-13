import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
 import styles from './styles';
import StylesButtons from '../StylesButtons';

const CarItem = (props) => {
  const {name,mline,clicktag,image} =props.car;
  return (



    <View style={styles.carcontainer}>
      <ImageBackground source={image}
        style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.mtitle}>{name}</Text>
        <Text style={styles.subtitle}>{mline}
          <Text style={styles.subtitlect}>{ clicktag} </Text>
        
        </Text>
      </View>

    <View style={styles.buttoncontainer}>
      <StylesButtons type='primary' 
      content={"custom Order"}
      onPress={()=>{
        console.warn("customer order is placed")
      }}
      />


      <StylesButtons type='secondary' 
      content={"inventory"}
      onPress={()=>{
        console.warn("viewing inventory")
      }}
      />
  </View>
    </View>

  );
};

export default CarItem;