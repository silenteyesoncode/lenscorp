import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Header() {
  return <View style={{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 5,
  }}>
    <Image
      source={require('../assets/indainRailway.png')} // Specify the path to your image
      style={styles.image} />
    <TouchableOpacity style={{
      backgroundColor: '#dc2626',
      paddingVertical: 10,
      paddingHorizontal: 5,
      borderRadius: 8,
    }}>
      <Text style={{
        fontSize: 16,
        color: 'white',
      }}>
        Contact Us
      </Text>
    </TouchableOpacity>
  </View>;
}
