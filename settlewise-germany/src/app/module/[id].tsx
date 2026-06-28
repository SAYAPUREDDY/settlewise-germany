import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChecklistItem } from '@/components/ChecklistItem';
import { FAQAccordion } from '@/components/FAQAccordion';
import { ProgressBar } from '@/components/ProgressBar';
import { SectionCard } from '@/components/SectionCard';
import { Colors } from '@/constants/colors';
import { getModuleById } from '@/data/appData';
import { loadChecklistProgress, saveChecklistProgress } from '@/utils/storage';

export default function ModuleDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const module = getModuleById(id ?? '');
  const navigation = useNavigation();

  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => {
    if (module) {
      navigation.setOptions({ title: module.title });
    }
  }, [module, navigation]);

  useEffect(() => {
    if (!module) return;
    loadChecklistProgress(module.id).then((ids) => {
      setCompletedIds(ids);
      setLoaded(true);
    });
  }, [module?.id]);

  const toggleItem = useCallback(
    async (itemId: string) => {
      if (!module) return;
      setCompletedIds((prev) => {
        const next = prev.includes(itemId)
          ? prev.filter((x) => x !== itemId)
          : [...prev, itemId];
        saveChecklistProgress(module.id, next);
        return next;
      });
    },
    [module],
  );

  if (!module) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.error}>Module not found.</Text>
      </SafeAreaView>
    );
  }

  const { sections } = module;
  const total = module.checklist.length;
  const completed = completedIds.length;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {sections.whatIs ? (
          <SectionCard title="What is Anmeldung?">
            <Text style={styles.body}>{sections.whatIs}</Text>
          </SectionCard>
        ) : null}

        {sections.requiredDocuments?.length ? (
          <SectionCard title="Required documents">
            {sections.requiredDocuments.map((doc, i) => (
              <Text key={i} style={styles.bullet}>
                • {doc}
              </Text>
            ))}
          </SectionCard>
        ) : null}

        {sections.steps?.length ? (
          <SectionCard title="Step-by-step process">
            {sections.steps.map((step, i) => (
              <Text key={i} style={styles.bullet}>
                {i + 1}. {step}
              </Text>
            ))}
          </SectionCard>
        ) : null}

        {module.checklist.length > 0 ? (
          <SectionCard title="Checklist">
            {loaded ? <ProgressBar completed={completed} total={total} /> : null}
            <View style={styles.checklist}>
              {module.checklist.map((item) => (
                <ChecklistItem
                  key={item.id}
                  label={item.label}
                  checked={completedIds.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </View>
          </SectionCard>
        ) : null}

        {module.faqs.length > 0 ? (
          <SectionCard title="FAQ">
            <FAQAccordion items={module.faqs} />
          </SectionCard>
        ) : null}

        {sections.officialLinks && sections.officialLinks.length > 0 ? (
          <SectionCard title="Official links">
            {sections.officialLinks.map((link) => (
              <Pressable
                key={link.url}
                onPress={() => Linking.openURL(link.url)}
                accessibilityRole="link"
              >
                <Text style={styles.link}>{link.label}</Text>
              </Pressable>
            ))}
          </SectionCard>
        ) : null}

        <SectionCard title="Disclaimer">
          <Text style={styles.disclaimer}>{module.disclaimer}</Text>
        </SectionCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  scroll: { padding: 20, gap: 16, paddingBottom: 40 },
  body: { fontSize: 15, color: Colors.textSecondary, lineHeight: 22 },
  bullet: { fontSize: 15, color: Colors.textSecondary, lineHeight: 22 },
  checklist: { gap: 10 },
  link: { fontSize: 15, color: Colors.link, textDecorationLine: 'underline' },
  disclaimer: { fontSize: 14, color: Colors.textSecondary, lineHeight: 21, fontStyle: 'italic' },
  error: { padding: 24, fontSize: 16, color: Colors.textSecondary },
});
