import React from "react";
import { StyleSheet, Text } from "react-native";

interface ErrorMsgProp {
  errorMsg: string;
}

const ErrorMsg = ({ errorMsg }: ErrorMsgProp) => {
  return <Text style={styles.error}>{errorMsg}</Text>;
};

export default ErrorMsg;

const styles = StyleSheet.create({
  error: {
    textAlign: "center",
    color: "red",
  },
});
