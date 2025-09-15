import { Link, useLocalSearchParams } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Venues() {
  const year = useLocalSearchParams<{year?: string}>();
  if (!year) {
    return(
      <View style={styles.container}>
        <Text style={styles.textStyle}>No concerts found in this year</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Concerts in {year.year}</Text>
      <Link href="/concerts/venues/performed/london1234" push asChild>
        <Button title="Select setlist london1234" />
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