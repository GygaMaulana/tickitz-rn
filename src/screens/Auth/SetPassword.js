import React, {useState} from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
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
            <Text style= {{fontSize:26, color:'black', lineHeight: 31, fontWeight:'bold'}}>Set Password</Text>
          </View>
          <View>
            <Text style={{paddingVertical:6}}>Set your new password</Text>
          </View>
    </View>
    <View style={{paddingHorizontal:20}}>
    <Text style={{paddingTop:20}}>Password</Text>
    <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-between',borderWidth:1,borderRadius:10}}>
      <TextInput style={{ paddingLeft:10}} placeholder='Write Your Password ' secureTextEntry={showPassword?false:true} />
      <TouchableOpacity
      onPress={() => setShowPassword(!showPassword)}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginRight:10}}>
        {showPassword ? (
          <Text style={{}}>Hide</Text>
        ) : (
          <Text style={{}}>Show</Text>
        )}
      </Text>
    </TouchableOpacity>
    </View>
  </View>
  <View style={{paddingHorizontal:20}}>
    <Text style={{paddingTop:20}}>Confrim Password</Text>
    <View style={{marginTop:10, flexDirection:'row', justifyContent:'space-between',borderWidth:2,borderRadius:10}}>
      <TextInput style={{ paddingLeft:10}} placeholder='Confrim your password' secureTextEntry={showPassword?false:true} />
      <TouchableOpacity
      onPress={() => setShowPassword(!showPassword)}
      style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginRight:10}}>
        {showPassword ? (
          <Text style={{}}>Hide</Text>
        ) : (
          <Text style={{}}>Show</Text>
        )}
      </Text>
    </TouchableOpacity>
    </View>
  </View>
  <View style={{paddingTop:20,marginHorizontal:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Signin')} style={{backgroundColor:'#5F2EEA',height:50,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'#fff'}}>Submit</Text>
            </TouchableOpacity>
          </View>
  </ScrollView>
  )
}

export default SetPassword