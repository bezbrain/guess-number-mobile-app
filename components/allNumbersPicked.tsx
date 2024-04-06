import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import NumberPicked from "./numberPicked";

interface AllNumbersPickedProps {
  allNumbers: { id: number; text: string }[];
}

const AllNumbersPicked = ({ allNumbers }: AllNumbersPickedProps) => {
  return (
    // <View style={styles.content}>
    <ScrollView style={styles.scrollView}>
      {allNumbers.map((each, i) => (
        <NumberPicked numberChosen={each.text} key={each.id} count={i + 1} />
      ))}
    </ScrollView>
    // </View>
  );
};

export default AllNumbersPicked;

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
  },
  content: {
    // flex: 1,
  },
});
