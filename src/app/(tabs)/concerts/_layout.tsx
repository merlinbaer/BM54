import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Concerts in Year' }} />
      <Stack.Screen
        name="ahead"
        options={{ title: 'Concerts ahead', headerBackButtonDisplayMode: 'minimal' }}
      />
      <Stack.Screen
        name="venues/[year]"
        options={{ title: 'Concert Venues', headerBackButtonDisplayMode: 'minimal' }}
      />
      <Stack.Screen
        name="venues/performed/[setlist]"
        options={{ title: 'Songs perfomed', headerBackButtonDisplayMode: 'minimal' }}
      />
    </Stack>
  );
}
