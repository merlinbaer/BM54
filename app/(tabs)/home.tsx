import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from '../../components/Item';

const DATA = Array.from({ length: 20 }, (_, i) => ({ id: i.toString(), title: `Home Item ${i + 1}` }));

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item title={item.title} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 24, marginBottom: 16 }
});