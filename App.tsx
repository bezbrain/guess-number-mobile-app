import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { InputNumber } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.gameHeader}>Guess the Number game</Text>
      <InputNumber />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
