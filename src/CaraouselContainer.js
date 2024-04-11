import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { styles } from './styles';
import colors from './colors/color';
export function CaraouselContainer(setActiveSlide, activeSlide) {


  const { width } = Dimensions.get('window');

  const data = [
    { image: require('../assets/homeimage1.jpeg') },
    { image: require('../assets/homeimage2.jpeg') },
    { image: require('../assets/homeimage3.jpeg') },
    // Add more images as needed
  ];

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.caraouselImage} />
    </View>
  );


  return <View style={{
    // height: '25%',
    paddingTop: '5%',
    backgroundColor: colors.themePrimaryHash
  }}>
    <Carousel
      data={data}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width * 0.8}
      loop
      autoplay
      autoplayInterval={3000}
      layout={'default'}
      onSnapToItem={(index) => setActiveSlide(index)} />
    <Pagination
      dotsLength={data.length}
      activeDotIndex={activeSlide}
      containerStyle={styles.paginationContainer}
      dotStyle={styles.dotStyle}
      inactiveDotStyle={styles.inactiveDotStyle}
      inactiveDotOpacity={0.9}
      inactiveDotScale={0.9} />
  </View>;
}
