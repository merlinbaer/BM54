import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Videos() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Video List Screen</Text>
      <Link href="/video" push asChild>
        <Button title="Video Player" />
      </Link>
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