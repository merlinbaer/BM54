import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Songs() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Song Preview List Screen</Text>
      <Link href="/songs/songdetail" push asChild>
        <Button title="Song Detail" />
      </Link>
      <Link href="/bottom" push asChild>
        <Button title="Call bottom player" />
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
