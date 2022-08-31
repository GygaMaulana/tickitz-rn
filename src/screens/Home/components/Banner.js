import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Banner = () => {
    return (
      <View style={{padding:29}}>
         <Text style={styles.near}>
            Nearest Cinema, Newest Cinema
         </Text>
          <Text style={styles.find}>
            Find Out now!
          </Text>
          <View style= {styles.gamBanner}>
            <View style={{marginTop:100}}>
                <Image source={require('../../../assets/spy-banner.png')} style={{width: 94, height: 300, resizeMode: 'contain'}}/>
            </View>
            <View style={{marginTop:50, marginLeft:10}}>
                <Image source={require('../../../assets/lion-banner.png')} style={{width: 94, height: 300, resizeMode: 'contain'}}/>
            </View>
            <View style={{marginTop:10, marginLeft:10}}>
                <Image source={require('../../../assets/teuing-banner.png')} style={{width: 94, height: 300, resizeMode: 'contain'}}/>
            </View>
          </View>       
      </View>
    )
  }
  const styles = StyleSheet.create({
    near: {
      fontSize:14,
      fontWeight:'400',
      color :'#A0A3BD',
      lineHeight:18
    },
    find: {
      fontSize: 30,
      color :'#5F2EEA',
      fontWeight: "900",
      lineHeight:40,
    },
    gamBanner: {
        display :'flex',
        flexDirection :'row',
        alignContent:"flex-start"
    }
  });
  
  export default Banner

