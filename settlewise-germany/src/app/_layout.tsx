import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Colors } from '@/constants/colors';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: Colors.text,
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: Colors.background },
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="city-select" options={{ title: 'Select City' }} />
        <Stack.Screen name="home" options={{ title: 'Cham' }} />
        <Stack.Screen
          name="module/[id]"
          options={({ route }) => ({
            title: 'Guide',
            headerBackTitle: 'Back',
          })}
        />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
