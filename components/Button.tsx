import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
// eslint-disable-next-line import/extensions
import Colors from "../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.buttonBC,
    marginVertical: 45,
    marginHorizontal: 140,
    borderRadius: 20,
    alignItems: "center",
  },
  submitcontainer: {
    backgroundColor: Colors.submitBC,
    marginVertical: 35,
    marginHorizontal: 140,
    borderRadius: 20,
    alignItems: "center",
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

type Buttontype = {
  text: string;
  // eslint-disable-next-line react/require-default-props
  onPress?: () => void;
};

export const Button = ({ text, onPress }: Buttontype) => {
  if (text === "Submit") {
    return (
      <View style={styles.submitcontainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
