import { router } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Colors } from '@/constants/colors';
import { appData } from '@/data/appData';

export default function CitySelectScreen() {
  const { country } = appData;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Text style={styles.hint}>Tap Cham to open your setup guide.</Text>

      <View style={styles.tree}>
        <Text style={styles.levelCountry}>{country.name}</Text>

        {country.states.map((state) => (
          <View key={state.id} style={styles.indent}>
            <Text style={styles.levelState}>{state.name}</Text>

            {state.cities.map((city) => (
              <Pressable
                key={city.id}
                style={[styles.cityRow, !city.selectable && styles.cityDisabled]}
                disabled={!city.selectable}
                onPress={() => router.push('/home')}
                accessibilityRole="button">
                <Text style={[styles.levelCity, city.selectable && styles.cityActive]}>
                  {city.name}
                </Text>
                {city.selectable ? <Text style={styles.arrow}>→</Text> : null}
              </Pressable>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, padding: 20 },
  hint: { fontSize: 14, color: Colors.textSecondary, marginBottom: 20 },
  tree: { gap: 8 },
  levelCountry: { fontSize: 22, fontWeight: '700', color: Colors.text },
  indent: { marginLeft: 16, marginTop: 8, gap: 8 },
  levelState: { fontSize: 18, fontWeight: '600', color: Colors.text },
  cityRow: {
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.card,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  cityDisabled: { opacity: 0.5 },
  levelCity: { fontSize: 17, color: Colors.textSecondary },
  cityActive: { color: Colors.primary, fontWeight: '600' },
  arrow: { fontSize: 18, color: Colors.primary, fontWeight: '600' },
});
