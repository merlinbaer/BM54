import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { title: string };

export default function Item({ title }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  title: { fontSize: 18 },
});