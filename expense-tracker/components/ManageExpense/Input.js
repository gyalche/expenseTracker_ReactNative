import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function Input({ label, style, textInputConfig }) {
  let inputStyles = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultline);
  }
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 9,
  },
  label: {
    fontSize: 12,
    color: black,
    marginBottom: 4,
  },
  input: {
    backgroundColor: white,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: white,
  },
  inputMultline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
