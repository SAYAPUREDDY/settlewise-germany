import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

type Props = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export function ChecklistItem({ label, checked, onToggle }: Props) {
  return (
    <Pressable
      style={[styles.row, checked && styles.rowChecked]}
      onPress={onToggle}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}>
      <View style={[styles.box, checked && styles.boxChecked]}>
        {checked ? <Text style={styles.checkmark}>✓</Text> : null}
      </View>
      <Text style={[styles.label, checked && styles.labelChecked]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
  },
  rowChecked: {
    backgroundColor: Colors.primaryLight,
    borderColor: Colors.primary,
  },
  box: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: Colors.disabled,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  checkmark: { color: Colors.buttonText, fontSize: 14, fontWeight: '700' },
  label: { flex: 1, fontSize: 15, color: Colors.text, lineHeight: 22 },
  labelChecked: { color: Colors.primary },
});
