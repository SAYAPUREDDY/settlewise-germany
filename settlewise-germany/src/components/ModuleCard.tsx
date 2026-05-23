import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type Props = {
  title: string;
  available: boolean;
  onPress: () => void;
};

export function ModuleCard({ title, available, onPress }: Props) {
  return (
    <Pressable
      style={[styles.card, !available && styles.cardDisabled]}
      onPress={onPress}
      accessibilityRole="button">
      <Text style={styles.title}>{title}</Text>
      {!available ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Coming Soon</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardDisabled: { opacity: 0.85 },
  title: { fontSize: 16, fontWeight: '600', color: Colors.text, flex: 1 },
  badge: {
    backgroundColor: Colors.cardBorder,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  badgeText: { fontSize: 12, color: Colors.textSecondary, fontWeight: '500' },
});
