import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { InputNumber, Result } from "./components";
import { useState } from "react";

export default function App() {
  const [numberOfTrials, setNumberOfTrial] = useState(5);
  const [randomNum, setRandomNum] = useState(0);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.gameHeader}>Guess the Number game</Text>
      <InputNumber setRandomNumber={setRandomNum} />

      <Text style={styles.textTrials}>Trials: {numberOfTrials}</Text>

      <Result randomNumber={randomNum} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 70,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
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
});
