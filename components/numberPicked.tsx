import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NumberPickedProps {
  numberChosen: string;
  count: number;
}

const NumberPicked = ({ numberChosen, count }: NumberPickedProps) => {
  return (
    <View style={styles.historyNumberCon}>
      <Text style={styles.numberText}>
        {count}. You Chose {numberChosen}
      </Text>
      <Text style={styles.icon}></Text>
    </View>
  );
};

export default NumberPicked;

const styles = StyleSheet.create({
  historyNumberCon: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#105210",
    borderRadius: 6,
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  numberText: {
    fontSize: 20,
  },
  icon: {
    width: 30,
    height: 30,
    borderWidth: 4,
    borderColor: "#c51c1c",
    borderRadius: 15,
  },
});
