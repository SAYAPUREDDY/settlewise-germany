import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SettleWise Germany</Text>
        <Text style={styles.subtitle}>
          Your simple guide to settling in Germany, city by city.
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => router.push('/city-select')}
        accessibilityRole="button">
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 24,
    justifyContent: 'space-between',
  },
  content: { flex: 1, justifyContent: 'center', gap: 16 },
  title: { fontSize: 28, fontWeight: '700', color: Colors.text, textAlign: 'center' },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: Colors.button,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: { color: Colors.buttonText, fontSize: 17, fontWeight: '600' },
});
