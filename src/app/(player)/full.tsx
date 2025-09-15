import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";


export default function SmallPlayer() {
  const router = useRouter();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.textStyle}>Full Screen Audio Player</Text>
        <Button title="Back" onPress={() => router.back()}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    padding: 20,
    backgroundColor: "yellow",
  },
  textStyle: {
    fontSize: 24
  },
});