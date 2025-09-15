import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}>
      <Tabs.Screen
        name="concerts"
        options={{
          title: 'Concerts',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="songs"
        options={{
          title: 'Songs',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="videos"
        options={{
          title: 'Videos',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
