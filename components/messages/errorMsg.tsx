import React from "react";
import { StyleSheet, Text } from "react-native";

const ErrorMsg = () => {
  return <Text style={styles.error}>You can only pick one digit</Text>;
};

export default ErrorMsg;

const styles = StyleSheet.create({
  error: {
    textAlign: "center",
    color: "red",
  },
});
