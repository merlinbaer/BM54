import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BMTabBar = (props: BottomTabBarProps) => {
  const [overlayHeight, setOverlayHeight] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <View>
      {/* Overlay über der TabBar */}
      <View style={styles.overlay} onLayout={(e) => setOverlayHeight(e.nativeEvent.layout.height)}>
        <Text style={styles.overlayText}>Text über der TabBar</Text>
        <Text style={styles.overlayText}>Overlay Höhe: {overlayHeight}px</Text>
        <Text style={styles.overlayText}>insets.bottom: {insets.bottom}px</Text>
      </View>

      {/* TabBar inkl. Safe Area */}
      <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
        <BottomTabBar {...props} />
      </View>
    </View>
  );
};

export default BMTabBar;

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Overlay Hintergrundfarbe
    paddingVertical: 8,
  },
  overlayText: {
    fontSize: 14,
    color: 'black',
  },
  tabBarContainer: {
    backgroundColor: 'green', // TabBar + Safe Area Hintergrundfarbe
  },
});
