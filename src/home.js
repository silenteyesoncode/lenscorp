import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView , View, ScrollView  } from 'react-native';
import colors from  './colors/color'


import { Header } from './Header';
import { styles } from './styles';
import { CaraouselContainer } from './CaraouselContainer';


const WeAre = "Indian Railways Promotee Officers Federation (IRPOF) is an organization of Promotee officers having its Head Quarter at New Delhi. It functions through its member associations. Zonal Associations functions through divisional bodies across all the 69 divisions of Indian Railways. The aim of the federation is to safeguard interests of promotee officers and provide better career opportunities and working conditions. It works for development and promoting overall efficiency in the working of Railways in the best interest of common people, the nation and the Railway Men.            "
const IRPOF = "IRPOF has launched this site to keep its member informed about the, latest activities and share views on topics of importance. All the members are requested to kindly contribute to make the site useful and meaningful.        "

export default function Home() {

  const [activeSlide, setActiveSlide] = useState(0);


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{height: 1000 }} showsVerticalScrollIndicator={false}>

        {CaraouselContainer(setActiveSlide, activeSlide)}
        <View style={{
          paddingVertical: 8,
          paddingHorizontal: 16,
          }}>
          <Text style={{
            fontSize: 36,
            fontWeight: 700,
            color: colors.themePrimaryHash
          }}>
          Indian Railway Promotee Officers Federation (IRPOF)
          </Text>
        </View>
        <View style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
        }} >
          <Text style={styles.text2}>
            {WeAre}
          </Text>
        </View>
        <View style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
        }} >
          <Text style={styles.text2}>
            {IRPOF}
          </Text>
        </View>

      </ScrollView>
      <StatusBar  />
    </View>
  );
}



