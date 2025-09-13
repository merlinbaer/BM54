import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Item from '../../components/Item';

const MENU = ['Chocolate', 'Coffee', 'Cookies', 'Cake', 'Ice Cream'];

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <FlatList
        data={MENU.map((title, idx) => ({ id: idx.toString(), title }))}
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