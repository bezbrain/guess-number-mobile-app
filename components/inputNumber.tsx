import React, { SetStateAction, Dispatch, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { randomNumber } from "../utils/randomNumber";
import CustomBtn from "./customBtn";
import ErrorMsg from "./messages/errorMsg";

interface InputNumberProps {
  setRandomNumber: Dispatch<SetStateAction<number>>;
  setIsResult: Dispatch<SetStateAction<boolean>>;
  setIsText: Dispatch<SetStateAction<string>>;
  isText: string;
  numberOfTrial: number;
  setNumberOfTrial: Dispatch<SetStateAction<number>>;
  chosenNum: string;
  randomNum: number;
  isResult: boolean;
  setNumberPicked: Dispatch<SetStateAction<{ id: number; text: string }[]>>;
}

const InputNumber = ({
  setRandomNumber,
  setIsResult,
  isText,
  setIsText,
  numberOfTrial,
  setNumberOfTrial,
  chosenNum,
  randomNum,
  setNumberPicked,
}: InputNumberProps) => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [btnContent, setBtnContent] = useState("Submit");

  //   HANDLE INPUT TEXT CHANGE
  const handleInputText = (text: string) => {
    setIsResult(false);

    // Regular expression to allow only numbers
    const regex = /^[0-9]*$/;

    // Make sure that only one number is acepted
    if (regex.test(text) && text.length <= 1) {
      setIsText(text);
      setIsError(false);
      setErrorMsg("");
      return;
    }
    setIsError(true);
    setErrorMsg("You can only pick one digit");
  };

  //   HANDLE CLICK OF CUSTOM BTN
  const handleSubmitNumber = () => {
    const random = randomNumber();
    setRandomNumber(random);

    if (!isText) {
      setIsError(true);
      setErrorMsg("Please type in number above");
      return;
    }

    // If number chosen is same as the random number, then reset number of trial
    if (Number(chosenNum) === randomNum) {
      setNumberOfTrial(5);
      return;
    }

    // Set trial back to 5 on click of restart btn
    if (btnContent === "Restart") {
      setNumberOfTrial(5);
      setBtnContent("Submit");
      return;
    }

    setIsResult(true);
    setNumberOfTrial(numberOfTrial - 1);

    setNumberPicked((currentNumberPicked) => [
      ...currentNumberPicked,
      {
        id: Date.now(),
        text: isText,
      },
    ]);
  };

  useEffect(() => {
    // Check if player has reached trial limit
    if (numberOfTrial === 0) {
      setIsResult(false);
      setBtnContent("Restart");
      return;
    }
  }, [numberOfTrial == 0]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

        {isError && <ErrorMsg errorMsg={errorMsg} />}

        <CustomBtn
          handleSubmitNumber={handleSubmitNumber}
          btnContent={btnContent}
        />
      </View>
    </TouchableWithoutFeedback>
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
