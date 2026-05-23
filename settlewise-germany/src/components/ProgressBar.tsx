import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type Props = {
  completed: number;
  total: number;
};

export function ProgressBar({ completed, total }: Props) {
  const percent = total > 0 ? (completed / total) * 100 : 0;

  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>
        {completed} / {total} completed
      </Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { gap: 8 },
  label: { fontSize: 14, color: Colors.textSecondary, fontWeight: '600' },
  track: {
    height: 8,
    backgroundColor: Colors.cardBorder,
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
});
