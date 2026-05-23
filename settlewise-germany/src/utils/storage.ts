import AsyncStorage from '@react-native-async-storage/async-storage';

const CHECKLIST_PREFIX = 'checklist:';

/** Storage key for a module checklist, e.g. checklist:anmeldung */
function checklistKey(moduleId: string): string {
  return `${CHECKLIST_PREFIX}${moduleId}`;
}

/** Load which checklist item ids are completed */
export async function loadChecklistProgress(moduleId: string): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(checklistKey(moduleId));
    if (!raw) return [];
    const parsed = JSON.parse(raw) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Save completed checklist item ids */
export async function saveChecklistProgress(
  moduleId: string,
  completedIds: string[],
): Promise<void> {
  await AsyncStorage.setItem(checklistKey(moduleId), JSON.stringify(completedIds));
}
