import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const MainScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('../../assets/dark.jpg')} style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff', fontSize: 35}}>Tickitz</Text>
        <Text style={{color: '#fff', fontSize: 16}}>Cinema Booking App</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: '#fff', fontSize: 50}}>Nearest Cinema.</Text>
        <Text style={{color: '#fff', fontSize: 50}}>Newest Movies</Text>
      </View>
      <TouchableOpacity style={styles.getStarted} onPress={()=> navigation.navigate('Home')}>
        <Text style={{color: '#fff', fontSize: 18}}>Get Started</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 70,    
    },
    getStarted: {
        width: 300,
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: 70,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MainScreen