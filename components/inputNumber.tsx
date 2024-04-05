import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { randomNumber } from "../utils/randomNumber";

const InputNumber = () => {
  const [isText, setIsText] = useState("");
  const [numbersPicked, setNumberPicked] = useState([]);
  const [numberOfTrials, setNumberOfTrial] = useState(5);

  const handleInputText = (text: string) => {
    setIsText(text);
  };

  const handleSubmitNumber = () => {
    console.log(randomNumber());
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.inputInstruction}>Type number between 0 - 9</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            onChangeText={handleInputText}
          />
        </View>

        <View style={styles.customBtnContainer}>
          <View style={styles.customSubmitBtn}>
            <Text
              style={{
                textAlign: "center",
                color: "#105210",
                fontWeight: "bold",
                padding: 5,
              }}
              onPress={handleSubmitNumber}
            >
              Submit
            </Text>
          </View>
        </View>

        <Text style={styles.textTrials}>Trials: {numberOfTrials}</Text>
      </View>
    </ScrollView>
  );
};

export default InputNumber;

const styles = StyleSheet.create({
  inputInstruction: {
    textAlign: "center",
    fontSize: 18,
    color: "#105210",
    marginTop: 10,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },
  inputText: {
    borderColor: "#105210",
    borderBottomWidth: 2,
    height: 40,
    width: "30%",
    textAlign: "center",
    fontSize: 25,
    color: "#105210",
  },
  customBtnContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customSubmitBtn: {
    width: 100,
    borderWidth: 2,
    borderColor: "#105210",
    borderRadius: 8,
  },
  textTrials: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: "#105210",
  },
});
