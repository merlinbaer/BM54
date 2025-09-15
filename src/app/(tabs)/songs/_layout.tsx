import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Songs' }} />
      <Stack.Screen
        name="songdetail"
        options={{ title: 'Song Detail', headerBackButtonDisplayMode: 'minimal' }}
      />
    </Stack>
  );
}
