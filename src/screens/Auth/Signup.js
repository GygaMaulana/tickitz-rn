import React, {useState} from 'react'
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation() 
  return (
    
    <ScrollView style={{backgroundColor:'#fff'}}>
    <View style={{flexDirection :'row', justifyContent: 'space-between',paddingHorizontal: 10, paddingVertical: 20,}}>
          <View>  
        <Image source={require('../../assets/Tickitz-logo.png')} style={{width: 80, height: 20, resizeMode: 'contain'}}/>
          </View>
    </View>
      <View style={{paddingHorizontal:20, paddingVertical:20}}>
          <View>
            <Text style= {{fontSize:26, color:'black', lineHeight: 31, fontWeight:'bold'}}>Sign Up</Text>
          </View>
          <View>
            <Text style={{paddingVertical:6}}>Fill your addtional details</Text>
          </View>
          <View>
            <Text style={{paddingTop:20}}>First Name</Text>
            <View style={{paddingTop:10}}>
              <TextInput style={{borderWidth:1,borderRadius:10, paddingLeft:10}} placeholder='Write Your First Name' />
            </View>
          </View>
          <View>
            <Text style={{paddingTop:20}}>Last Name</Text>
            <View style={{paddingTop:10}}>
              <TextInput style={{borderWidth:1,borderRadius:10, paddingLeft:10}} placeholder='Write Your Last Name' />
            </View>
          </View>
          <View>
            <Text style={{paddingTop:20}}>Phone Number</Text>
            <View style={{paddingTop:10}}>
              <TextInput style={{borderWidth:1,borderRadius:10, paddingLeft:10}} placeholder='Write Your Phone Number' />
            </View>
          </View>
          <View>
            <Text style={{paddingTop:20}}>Email</Text>
            <View style={{paddingTop:10}}>
              <TextInput style={{borderWidth:1,borderRadius:10, paddingLeft:10}} placeholder='Write Your Email' />
            </View>
          </View>
          <View>
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
          <View style={{paddingTop:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Signin')} style={{backgroundColor:'#5F2EEA',height:50,justifyContent:'center',alignItems:'center',borderRadius:10}}>
                <Text style={{color:'#fff'}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text>Already have account ? <TouchableOpacity onPress={()=> navigation.navigate('Signin')}><Text style={{color:'#5F2EEA'}}>Sign in</Text></TouchableOpacity></Text>
          </View>
      </View>
    </ScrollView>
  )
}

export default Signup