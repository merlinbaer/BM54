import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Performed() {
  const setlistId = useLocalSearchParams<{setlist?: string}>();
  if (!setlistId) {
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>No songs perfomed with this setlist id</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Songs performed in {setlistId.setlist}</Text>
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