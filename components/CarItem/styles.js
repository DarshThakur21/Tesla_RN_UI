
import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';


const styles =StyleSheet.create({
    carcontainer: {
      // position:'absolute',
        height: Dimensions.get('window').height,
        width: '100%',
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
      },
      mtitle: {
          fontSize:40,
          fontWeight:'700',
      },
      subtitle: {
        marginTop:10,
        fontSize:20,
        color:'#5c5e62'
      },
      subtitlect:{
        textDecorationLine:'underline',
        fontWeight:'700',
        textTransform:"capitalize"
      },

      image:{
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttoncontainer:{
        position:'absolute',
        bottom:60,
        width:'100%',
        padding:10,

      },
       
});

export default styles;
 