import React, {useState} from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const navigation = useNavigation() 

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
    <View style={{flexDirection :'row', justifyContent: 'space-between',paddingHorizontal: 20, paddingVertical: 20,}}>
          <View>  
        <Image source={require('../../assets/Tickitz-logo.png')} style={{width: 80, height: 20, resizeMode: 'contain'}}/>
          </View>
    </View>
    <View style={{paddingHorizontal:20, paddingVertical:20}}>
          <View>
            <Text style= {{fontSize:26, color:'black', lineHeight: 31, fontWeight:'bold'}}>Forgot Password</Text>
          </View>
          <View>
            <Text style={{paddingVertical:6}}>We'll send a link to your email shortly</Text>
          </View>
    </View>
    <View style={{paddingHorizontal:20}}>
          <View>
            <Text style={{paddingTop:20}}>Email</Text>
            <View style={{paddingTop:10}}>
              <TextInput style={{borderWidth:1,borderRadius:10, paddingLeft:10}} placeholder='Write Your Email' />
            </View>
          </View>
          <View style={{paddingTop:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('SetPassword')} style={{backgroundColor:'#5F2EEA',height:50,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'#fff'}}>Send</Text>
            </TouchableOpacity>
          </View>
    </View>
    </ScrollView>
  )
}

export default ForgotPassword