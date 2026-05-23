import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';
import type { FAQItem } from '@/data/appData';

type Props = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <View style={styles.list}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <View key={item.id} style={styles.item}>
            <Pressable
              style={styles.questionRow}
              onPress={() => setOpenId(isOpen ? null : item.id)}>
              <Text style={styles.question}>{item.question}</Text>
              <Text style={styles.chevron}>{isOpen ? '−' : '+'}</Text>
            </Pressable>
            {isOpen ? <Text style={styles.answer}>{item.answer}</Text> : null}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  list: { gap: 8 },
  item: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    overflow: 'hidden',
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    gap: 8,
  },
  question: { flex: 1, fontSize: 15, fontWeight: '600', color: Colors.text },
  chevron: { fontSize: 20, color: Colors.primary, fontWeight: '600' },
  answer: {
    paddingHorizontal: 14,
    paddingBottom: 14,
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 21,
  },
});
