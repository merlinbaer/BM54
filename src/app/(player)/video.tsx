import { StyleSheet, Text, View } from "react-native";


export default function VideoPlayer() {

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Youtube Screen</Text>
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
    fontSize: 18,
    fontWeight: 'bold'
  },
});