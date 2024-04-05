import React, { SetStateAction, Dispatch, useState } from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { randomNumber } from "../utils/randomNumber";
import CustomBtn from "./customBtn";
import { ErrorMsg } from "./";

interface InputNumberProps {
  setRandomNumber: Dispatch<SetStateAction<number>>;
}

const InputNumber = ({ setRandomNumber }: InputNumberProps) => {
  const [isText, setIsText] = useState("");
  const [numbersPicked, setNumberPicked] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleInputText = (text: string) => {
    if (text.length <= 1) {
      setIsText(text);
      setIsError(false);
      return;
    }
    setIsError(true);
  };

  const handleSubmitNumber = () => {
    const random = randomNumber();
    setRandomNumber(random);
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
            value={isText}
          />
        </View>

        {isError && <ErrorMsg />}

        <CustomBtn handleSubmitNumber={handleSubmitNumber} />
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
});
