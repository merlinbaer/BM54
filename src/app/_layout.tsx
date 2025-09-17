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
        name="(player)/full"
        options={{
          title: '',
          presentation: 'modal',
          headerShown: false,
          contentStyle: {
            opacity: 0.9,
            bottom: 30, // TODO: insets.bottom
            borderRadius: 12,
          },
        }}
      />
    </Stack>
  );
}
