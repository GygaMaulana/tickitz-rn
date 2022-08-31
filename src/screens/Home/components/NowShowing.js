import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';


const NowShowing= () => {
    return (
        <View>
        <View style={{flexDirection :'row', justifyContent: 'space-between',paddingHorizontal: 10, paddingVertical: 30, backgroundColor: '#fff'}}>
              <View>
                <Text style={styles.ns}>Now showing</Text>
              </View>
            <View>
              <TouchableOpacity>
                    <Text style={styles.va}>View all</Text>
              </TouchableOpacity>
            </View>
        </View>
        <ScrollView horizontal={true}>
            <View style={{padding :20, flexDirection:'row', marginHorizontal:20}}>
                <View style={{padding:20}}>
                    <Image source={require('../../../assets/spi-ns.png')} style={{width: 122, height: 185, resizeMode: 'contain'}}/>
                    <View style={{padding:20}}>
                        <Button title="Detail"onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                </View>
                <View style={{padding:20}}>
                    <Image source={require('../../../assets/spi-ns.png')} style={{width: 122, height: 185, resizeMode: 'contain'}}/>
                    <View style={{padding:20}}>
                        <Button title="Detail"onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                </View>
                <View style={{padding:20}}>
                    <Image source={require('../../../assets/spi-ns.png')} style={{width: 122, height: 185, resizeMode: 'contain'}}/>
                    <View style={{padding:20}}>
                        <Button title="Detail"onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                </View>
                <View style={{padding:20}}>
                    <Image source={require('../../../assets/spi-ns.png')} style={{width: 122, height: 185, resizeMode: 'contain'}}/>
                    <View style={{padding:20}}>
                        <Button title="Detail"onPress={() => Alert.alert('Simple Button pressed')}/>
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
    )
  }

  const styles = StyleSheet.create({
    ns: {
      fontSize:18,
      color :'#752EEA',
      lineHeight:23,
      fontWeight:'700'
    },
    va: {
      fontSize:14,
      color :'#752EEA',
      lineHeight:26,
      fontWeight:'600'
    }
  });
  
  export default NowShowing
