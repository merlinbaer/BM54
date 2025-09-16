import { overlayStore$ } from '@/store/memory';
import { observer } from '@legendapp/state/react';
import { Link } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

const Songs = observer(() => {
  const isVisible = overlayStore$.visible.get();
  const switchOverlay = () => overlayStore$.visible.set(!isVisible);
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Song Preview List Screen</Text>
      <Link href="/songs/songdetail" push asChild>
        <Button title="Song Detail" />
      </Link>
      <Link href="/bottom" push asChild>
        <Button title="Call bottom player" />
      </Link>
      <Button
        title={isVisible ? 'Bottom Player ausblenden' : 'Bottom Player einblenden'}
        onPress={switchOverlay}
      />
    </View>
  );
});

export default Songs;

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
