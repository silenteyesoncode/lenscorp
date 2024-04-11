import { StyleSheet , Dimensions } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '10%',
  },
  image: {
    width: 50, // Adjust the width as per your requirement
    height: 50, // Adjust the height as per your requirement
    resizeMode: 'contain', // You can adjust the resizeMode as per your image aspect ratio
  },
  slide: {
    width:"100%", // Adjust the width of each item
    height:350, // Adjust the height of each item
    justifyContent: 'center',
    alignItems: 'center',
  },
  caraouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },

  paginationContainer: {
    // bottom: 20,
  },
  dotStyle: {
    width: 9,
    height: 9,
    borderRadius: 4,
    backgroundColor: 'red',
  },
  inactiveDotStyle: {
    borderColor: 'rgb(101, 40, 216)',
    backgroundColor: '#fff',
    // Define styles for inactive dots
  },
  imagebg:{
    paddingVertical: 10,
    paddingHorizontal: 22,
  },

  text2: {
    fontSize: 16
  },
  text3: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 5
  },
  textHead: {
    fontSize:20,
    color: '#fff',
    fontWeight: 'bold'
  }
});
