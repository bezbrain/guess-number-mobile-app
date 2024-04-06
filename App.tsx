import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { InputNumber, NumberPicked, Result } from "./components";
import { useState } from "react";

export default function App() {
  const [numberOfTrials, setNumberOfTrial] = useState(5);
  const [randomNum, setRandomNum] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const [isText, setIsText] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.gameHeader}>Guess the Number game</Text>

      <InputNumber
        setRandomNumber={setRandomNum}
        isResult={isResult}
        setIsResult={setIsResult}
        isText={isText}
        setIsText={setIsText}
        numberOfTrial={numberOfTrials}
        setNumberOfTrial={setNumberOfTrial}
        chosenNum={isText}
        randomNum={randomNum}
      />

      {numberOfTrials === 0 ? (
        <>
          <Text style={styles.textTrials}>You have reached trial limit</Text>
          <Text style={styles.textOver}>GAME OVER</Text>
        </>
      ) : (
        <Text style={styles.textTrials}>Trials: {numberOfTrials}</Text>
      )}

      {isResult && <Result randomNumber={randomNum} chosenNumber={isText} />}

      <Text style={styles.numbersPicked}>Previous Number Picked</Text>

      <NumberPicked numberChosen={isText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 70,
    padding: 10,
  },
  gameHeader: {
    textAlign: "center",
    fontSize: 25,
    color: "#105210",
  },
  textTrials: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: "#c51c1c",
  },
  textOver: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#c51c1c",
    fontWeight: "bold",
  },
  numbersPicked: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 25,
    marginBottom: 15,
  },
});
