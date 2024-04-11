import React from 'react';
import { Text, View } from 'react-native';
import colors from './colors/color';
import { styles } from './styles';
import { WeAre, IRPOF } from './home';

export function Container() {
  return <>
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
    }}>
      <Text style={styles.text2}>
        {WeAre}
      </Text>
    </View>
    <View style={{
      paddingVertical: 8,
      paddingHorizontal: 16,
    }}>
      <Text style={styles.text2}>
        {IRPOF}
      </Text>
    </View>

  </>;
}
