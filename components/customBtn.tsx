import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CustomBtnProps {
  handleSubmitNumber: () => void;
  btnContent: string;
}

const CustomBtn = ({ handleSubmitNumber, btnContent }: CustomBtnProps) => {
  return (
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
          {btnContent}
        </Text>
      </View>
    </View>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
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
});
