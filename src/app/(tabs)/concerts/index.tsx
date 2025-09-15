import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Concerts() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Concert Year List Screen</Text>
      <Link href="/concerts/ahead" push asChild>
        <Button title="Select concerts ahead" />
      </Link>
      <Link href="/concerts/venues/2020" push asChild>
        <Button title="Select concerts in year: 2020" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
  },
});
