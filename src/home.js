import { StatusBar } from 'expo-status-bar';
import { Text, View , SafeAreaView } from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';


import { Header } from './Header';
import { styles } from './styles';


export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
      <>
                <Carousel
                    ref={carouselRef}
                    scrollEnabled={true} // Enable swipe gestures
                    data={carouselData}
                    renderItem={_renderItem}
                    sliderWidth={viewportWidth}
                    itemWidth={viewportWidth}
                    // enableMomentum={false}
                    onSnapToItem={index => setActiveSlide(index)}
                    autoplay={true} // Enable auto-scrolling
                    autoplayInterval={4000} // Set the interval for auto-scrolling (in milliseconds)
                    loop={true} // Loop through the images
                    lockScrollWhileSnapping={true}
                    enableMomentum={true} />

                <View style={Carouselstyles.paginationContainer}>
                    <Pagination
                        dotsLength={carouselData.length}
                        activeDotIndex={activeSlide}
                        containerStyle={Carouselstyles.pagination}
                        dotStyle={Carouselstyles.dot}
                        inactiveDotOpacity={0.9}
                        inactiveDotScale={0.9}
                        inactiveDotStyle={Carouselstyles.inactivedot} />
                </View>
            </>
      </View>
      <View >
        <Text>Open up App.js to start working on your app!</Text>
      </View>
      <StatusBar  />
    </SafeAreaView>
  );
}


