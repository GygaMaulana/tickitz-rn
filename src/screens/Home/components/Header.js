import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation()  
    return (
    <>
      <View style={{flexDirection :'row', justifyContent: 'space-between',paddingHorizontal: 10, paddingVertical: 30, backgroundColor: '#fff'}}>
            <View>  
          <Image source={require('../../../assets/Tickitz-logo.png')} style={{width: 80, height: 20, resizeMode: 'contain'}}/>
            </View>
          <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
            <Image source={require('../../../assets/Humberger-logo.png')} style={{width: 80, height: 20, resizeMode: 'contain'}}/>
            </TouchableOpacity>
          </View>
      </View>
      </>
    )
  }
  
  export default Header
