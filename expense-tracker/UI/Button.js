import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function Button({ children, onPress, mode, style }) {
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  flat: {
    backgroundColor: 'transparent',
  },

  buttonText: {
    color: white,
    textAlign: 'center',
  },

  flatText: {
    color: blue,
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: green,
    borderRadius: 4,
  },
});
