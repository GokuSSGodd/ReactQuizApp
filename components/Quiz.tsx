import React, { useState } from "react";
import { StyleSheet, SafeAreaView, Text, Alert, View } from "react-native";
// eslint-disable-next-line import/extensions
import { Question } from "../screens/Question";
// eslint-disable-next-line import/extensions
import Colors from "../constants/colors";
// eslint-disable-next-line import/extensions
import { Button } from "../components/Button";

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    color: Colors.text,
  },
  row: {
    paddingHorizontal: 10,
    paddingVertical: 50,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: Colors.text,
    textAlign: "center",
  },
});

export const Quiz = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (selectedOption === Question.correctAnswer) {
      Alert.alert("Correct!", "You got the C++ Badge!");
    } else if (selectedOption === Question.WrongAnswer[0]) {
      Alert.alert("Incorrect!", `${Question.hints[0]} Try again!`);
    } else if (selectedOption === Question.WrongAnswer[1]) {
      Alert.alert("Incorrect!", `${Question.hints[1]} Try again!`);
    } else if (selectedOption === Question.WrongAnswer[2]) {
      Alert.alert("Incorrect!", `${Question.hints[2]} Try again!`);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.screen, flex: 1 }}>
      <Text style={styles.text}>{Question.question}</Text>
      {Question.options.map((option: string, index: any) => (
        // eslint-disable-next-line react/no-array-index-key
        <View key={index} style={styles.button}>
          <Button text={option} onPress={() => handleOptionPress(option)} />
        </View>
      ))}
      <Button text="Submit" onPress={checkAnswer} />
    </SafeAreaView>
  );
};
