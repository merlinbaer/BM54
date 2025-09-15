import { StyleSheet, Text, View } from "react-native";

export default function Ahead() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Concert Ahead List Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 24
  },
});