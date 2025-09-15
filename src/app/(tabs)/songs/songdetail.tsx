import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SongDetail() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Sing Detail Screen</Text>
      <Link href="/video" push asChild>
        <Button title="Video Player" />
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
