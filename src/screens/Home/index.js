import React from 'react'
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Banner from './components/Banner';
import Header from './components/Header';
import NowShowing from './components/NowShowing';
import UpComing from './components/UpComing';


const Home = () => {
  return (
    <SafeAreaView style={{paddingBottom: 20}}>
          <Header/>
        <ScrollView>
          <Banner/>
          <NowShowing/>
          <UpComing/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home