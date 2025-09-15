import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(player)/video"
        options={{
          title: 'Youtube Player',
          headerBackButtonDisplayMode: 'minimal',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="(player)/bottom"
        options={{
          title: '',
          presentation: 'modal',
          headerShown: false,
          contentStyle: {
            opacity: 0.9,
            position: 'absolute',
            bottom: 90,
            left: 15,
            right: 15,
            borderRadius: 12,
          },
        }}
      />
    </Stack>
  );
}
