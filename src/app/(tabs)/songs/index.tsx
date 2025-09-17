import { overlayStore$ } from '@/store/memory';
import { observer } from '@legendapp/state/react';
import { Link } from 'expo-router';
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

const Songs = observer(() => {
  const isVisible = overlayStore$.visible.get();
  const switchOverlay = () => overlayStore$.visible.set(!isVisible);
  const data = Array.from({ length: 12 }, (_, i) => ({
    id: i.toString(),
    title: `Langer Songname ${i + 1}`,
  }));
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[
        styles.contentContainer,
        { paddingBottom: overlayStore$.playerPadding.get() }, // hier wird playerPadding dynamisch gesetzt
      ]}>
      <Text style={styles.textStyle}>Song Preview List Screen</Text>
      <Link href="/songs/songdetail" push asChild>
        <Button title="Song Detail" />
      </Link>
      <Link href="/full" push asChild>
        <Button title="Full Audio Player" />
      </Link>
      <Button
        title={isVisible ? 'Bottom Player off' : 'Bottom Player on'}
        onPress={switchOverlay}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.title}</Text>
          </View>
        )}
        scrollEnabled={false} // wichtig! -> FlatList nicht selbst scrollen lassen
      />
      <Button
        title={isVisible ? 'Bottom Player ausblenden' : 'Bottom Player einblenden'}
        onPress={switchOverlay}
      />
    </ScrollView>
  );
});

export default Songs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // optional
  },
  contentContainer: {
    paddingBottom: 80,
    alignItems: 'center', // muss hier hin
    justifyContent: 'flex-start', // muss hier hin
  },
  textStyle: {
    fontSize: 24,
  },
  listItem: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listText: {
    fontSize: 18,
  },
});
