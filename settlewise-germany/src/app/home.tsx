import { router } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ModuleCard } from '@/components/ModuleCard';
import { Colors } from '@/constants/colors';
import { getDefaultCity } from '@/data/appData';

export default function HomeScreen() {
  const city = getDefaultCity();

  const handleModulePress = (moduleId: string, available: boolean) => {
    if (available) {
      router.push(`/module/${moduleId}`);
      return;
    }
    Alert.alert('Coming Soon', 'This guide is coming soon.');
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>{city.dashboardTitle}</Text>
        <Text style={styles.subtitle}>Pick a topic to get started.</Text>

        <View style={styles.list}>
          {city.modules.map((module) => (
            <ModuleCard
              key={module.id}
              title={module.title}
              available={module.available}
              onPress={() => handleModulePress(module.id, module.available)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 20, gap: 16, paddingBottom: 32 },
  title: { fontSize: 24, fontWeight: '700', color: Colors.text },
  subtitle: { fontSize: 15, color: Colors.textSecondary, marginBottom: 8 },
  list: { gap: 12 },
});
