import BMTabBar from '@/components/BMTabBar';
import { TAB_BAR_HEIGHT } from '@/constants/constants';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          height: TAB_BAR_HEIGHT, // gewünschte Höhe
          paddingBottom: 0, // Safe Area ignorieren
          backgroundColor: 'blue', // Farbe
        },
        tabBarActiveTintColor: 'white', // aktive Icons/Textfarbe
        tabBarInactiveTintColor: 'gray', // inaktive Icons/Textfarbe
      }}
      tabBar={(props) => <BMTabBar {...props} />}>
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
