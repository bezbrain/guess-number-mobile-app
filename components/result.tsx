import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ResultProps {
  randomNumber: number;
}

const Result = ({ randomNumber }: ResultProps) => {
  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        You chose <Text style={styles.youChose}>5</Text> but the real number is{" "}
        <Text style={styles.resultShown}>{randomNumber}</Text>
      </Text>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    textAlign: "center",
    fontSize: 18,
    alignItems: "center",
  },
  youChose: {
    fontSize: 30,
    color: "green",
  },
  resultShown: {
    fontSize: 30,
    color: "red",
  },
});
