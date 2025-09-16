import { TAB_BAR_HEIGHT } from '@/constants/constants';
import { overlayStore$ } from '@/store/memory';
import { observer } from '@legendapp/state/react';
import { BottomTabBar, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BMTabBar = observer((props: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  const isVisible = overlayStore$.visible.get();
  const opacity = useRef(new Animated.Value(isVisible ? 1 : 0)).current;
  const [showOverlay, setShowOverlay] = useState(isVisible);

  // playerPadding dynamisch setzen
  useEffect(() => {
    overlayStore$.playerPadding.set(isVisible ? TAB_BAR_HEIGHT + insets.bottom : 20);
  }, [isVisible, insets.bottom]);

  // Fade-In / Fade-Out mit Ease-In/Ease-Out
  useEffect(() => {
    if (isVisible) {
      setShowOverlay(true);
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => setShowOverlay(false));
    }
  }, [isVisible, opacity]);

  return (
    <View style={styles.container}>
      {/* Overlay absolut über TabBar */}
      {showOverlay && (
        <Animated.View
          style={[styles.overlay, { bottom: TAB_BAR_HEIGHT + insets.bottom, opacity }]}
          pointerEvents="box-none">
          <Text style={styles.overlayText}>Overlay</Text>
        </Animated.View>
      )}

      {/* TabBar */}
      <View style={[styles.tabBarContainer, { paddingBottom: insets.bottom }]}>
        <BottomTabBar {...props} />
      </View>
    </View>
  );
});

export default BMTabBar;

const styles = StyleSheet.create({
  container: { flexDirection: 'column' },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: 'rgba(255,255,0,0.8)',
    borderTopLeftRadius: 16, // nur obere linke Ecke abgerundet
    borderTopRightRadius: 16, // nur obere rechte Ecke abgerundet
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  overlayText: { fontSize: 14, color: 'black' },
  tabBarContainer: { backgroundColor: 'green' },
});
