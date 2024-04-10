import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView  } from 'react-native';
import colors from  './colors/color'


import { Header } from './Header';
import { styles } from './styles';
import { CaraouselContainer } from './CaraouselContainer';


export default function Home() {

  const [activeSlide, setActiveSlide] = useState(0);



  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {CaraouselContainer(setActiveSlide, activeSlide)}
    
      <StatusBar  />
    </SafeAreaView>
  );
}



