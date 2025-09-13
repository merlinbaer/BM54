import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeTabs, Label, Icon } from 'expo-router/unstable-native-tabs';
import { BlurView } from 'expo-blur';

export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="home">
        <Icon sf={{ default: 'house', selected: 'house.fill' }} />
        <Label>Home</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="menu">
        <Icon sf={{ default: 'list.bullet', selected: 'list.bullet' }} />
        <Label>Menu</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="settings">
        <Icon sf={{ default: 'gear', selected: 'gear.fill' }} />
        <Label>Settings</Label>
      </NativeTabs.Trigger>

      <BlurView intensity={80} tint="light" style={styles.blurOverlay} />
    </NativeTabs>
  );
}

const styles = StyleSheet.create({
  blurOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.3)'
  }
});