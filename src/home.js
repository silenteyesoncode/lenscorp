import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView , View, ScrollView , ImageBackground , Text  , Image } from 'react-native';


import { Header } from './Header';
import { styles } from './styles';
import { CaraouselContainer } from './CaraouselContainer';
import { Container } from './Container';
import { FacebookIcon , InstagramIcon , LinkedinIcon , DiscordIcon , XIcon , LocationIcon , PhoneIcon , EmailIcon } from './icon/svg';

export const WeAre = "Indian Railways Promotee Officers Federation (IRPOF) is an organization of Promotee officers having its Head Quarter at New Delhi. It functions through its member associations. Zonal Associations functions through divisional bodies across all the 69 divisions of Indian Railways. The aim of the federation is to safeguard interests of promotee officers and provide better career opportunities and working conditions. It works for development and promoting overall efficiency in the working of Railways in the best interest of common people, the nation and the Railway Men.            "
export const IRPOF = "IRPOF has launched this site to keep its member informed about the, latest activities and share views on topics of importance. All the members are requested to kindly contribute to make the site useful and meaningful.        "
const footerbg = {uri:'https://irpof.vercel.app/footerbg.png'}

export default function Home() {

  const [activeSlide, setActiveSlide] = useState(0);


  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={{height: 1800 }} showsVerticalScrollIndicator={false}>

        {CaraouselContainer(setActiveSlide, activeSlide)}
        <Container />

        <ImageBackground source={footerbg} resizeMode="cover" style={styles.imagebg}>
          <View style={{
            // paddingVertical: 20,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingBottom: 10,
          }} >
            <Image
              source={require('../assets/indainRailway.png')} // Specify the path to your image
              style={[styles.image , {width: 100 , height: 100}]} 
            />
            <View style={{
              flexDirection: 'row',
              paddingTop: 25,
            }} >
              <View style={{paddingHorizontal: 12}} >
                <FacebookIcon width={20} height={20} />
              </View>
              <View style={{paddingHorizontal: 12}} >
                <InstagramIcon width={20} height={20} />
              </View>
              <View style={{paddingHorizontal: 12}} >
                <LinkedinIcon width={20} height={20} />
              </View>
              <View style={{paddingHorizontal: 12}} >
                <DiscordIcon width={20} height={20} />
              </View>
              <View style={{paddingHorizontal: 12}} >
                <XIcon width={20} height={20} />
              </View>
             
            </View>

          </View>
          <View style={{
            paddingTop: 20
          }}>
            <Text style={styles.textHead}>
              Important Links
            </Text>

            <View style={{
              paddingVertical: 15
            }} >
              <Text style={styles.text3} >Home</Text>
              <Text style={styles.text3} >Organization</Text>
              <Text style={styles.text3} >Seniority</Text>
              <Text style={styles.text3} >Rules</Text>
              <Text style={styles.text3} >News/Article</Text>
              <Text style={styles.text3} >IRPOBF</Text>
            </View>

            <View style={{
              paddingVertical: 10,
              paddingBottom: 20
              }}  >
              <Text style={styles.textHead} >Contact Us </Text>
              <View style={{
                paddingTop: 20,
                paddingVertical: 10
              }} >
                <LocationIcon width={12} height={12} />
                <Text style={styles.text3} >208/A-4, Railway Colony Basant Lane,Pahar Ganj, Delhi- 110 055</Text>
              </View>
              <View style={{
                paddingVertical: 10
              }} >
                <PhoneIcon width={12} height={12} />
                <Text style={styles.text3} >42622924(DoT), 030-22924 030-23140(Rly.)</Text>
              </View>
              <View style={{
                paddingVertical: 10
              }} >
                <EmailIcon width={12} height={12} />
                <Text style={styles.text3} >dummy@railways.com {'\n'}dummy2@gmail.com</Text>
              </View>
            </View>

          </View>
        </ImageBackground>

      </ScrollView>
      <StatusBar  />
    </View>
  );
}




