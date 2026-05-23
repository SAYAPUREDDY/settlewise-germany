/**
 * Editable app content — add cities, modules, checklist items, and FAQs here.
 * The screens read from this file; no backend needed for content yet.
 */

export type ChecklistItem = {
  id: string;
  label: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type ModuleSection = {
  whatIs?: string;
  requiredDocuments?: string[];
  steps?: string[];
  officialLink?: { label: string; url: string };
};

export type Module = {
  id: string;
  title: string;
  available: boolean;
  sections: ModuleSection;
  checklist: ChecklistItem[];
  faqs: FAQItem[];
  disclaimer: string;
};

export type City = {
  id: string;
  name: string;
  selectable: boolean;
  dashboardTitle: string;
  modules: Module[];
};

export type State = {
  id: string;
  name: string;
  cities: City[];
};

export type Country = {
  id: string;
  name: string;
  states: State[];
};

export const disclaimer =
  'This app is an informational guide and not legal advice. Always verify final requirements with the official city website or Bürgerbüro.';

// --- Anmeldung module content ---
const anmeldungModule: Module = {
  id: 'anmeldung',
  title: 'City Registration / Anmeldung',
  available: true,
  sections: {
    whatIs:
      'Anmeldung is the official registration of your address in Germany. You must register within a few weeks of moving in.',
    requiredDocuments: [
      'Valid passport or national ID',
      'Wohnungsgeberbestätigung (from your landlord)',
      'Rental contract (if available)',
      'Completed registration form (if required by the office)',
    ],
    steps: [
      'Confirm your address in Cham',
      'Get Wohnungsgeberbestätigung from your landlord',
      'Check opening hours and documents on the city website',
      'Visit Bürgerbüro / Rathaus Cham',
      'Submit your documents',
      'Receive Meldebestätigung',
      'Keep the document in a safe place',
    ],
    officialLink: {
      label: 'Cham city website',
      url: 'https://www.cham.de/',
    },
  },
  checklist: [
    { id: '1', label: 'Confirm your address in Cham' },
    { id: '2', label: 'Get Wohnungsgeberbestätigung from your landlord' },
    { id: '3', label: 'Prepare passport or national ID' },
    { id: '4', label: 'Keep rental contract ready if available' },
    { id: '5', label: 'Check Bürgerbüro / Rathaus Cham requirements' },
    { id: '6', label: 'Visit the responsible office' },
    { id: '7', label: 'Collect Meldebestätigung' },
    { id: '8', label: 'Save the document safely' },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'What is Anmeldung?',
      answer:
        'It is the legal registration of where you live in Germany. You receive a Meldebestätigung as proof.',
    },
    {
      id: 'faq-2',
      question: 'When should I register my address?',
      answer:
        'Usually within 14 days of moving in. Check current rules for your situation.',
    },
    {
      id: 'faq-3',
      question: 'What is Wohnungsgeberbestätigung?',
      answer:
        'A document from your landlord confirming you moved into the address. You need it for Anmeldung.',
    },
    {
      id: 'faq-4',
      question: 'Can I register without a rental contract?',
      answer:
        'Often yes, if you have Wohnungsgeberbestätigung and ID. The office may ask for extra proof.',
    },
    {
      id: 'faq-5',
      question: 'What happens after Anmeldung?',
      answer:
        'You can use your Meldebestätigung for bank account, tax ID letter, and other official steps.',
    },
    {
      id: 'faq-6',
      question: 'Is this app official?',
      answer:
        'No. SettleWise Germany is a student-friendly guide. Always confirm details with the Bürgerbüro.',
    },
  ],
  disclaimer,
};

const comingSoonModules: Module[] = [
  { id: 'sim', title: 'SIM Card', available: false, sections: {}, checklist: [], faqs: [], disclaimer },
  { id: 'bank', title: 'Bank Account', available: false, sections: {}, checklist: [], faqs: [], disclaimer },
  {
    id: 'health',
    title: 'Health Insurance',
    available: false,
    sections: {},
    checklist: [],
    faqs: [],
    disclaimer,
  },
  { id: 'radio', title: 'Radio Tax', available: false, sections: {}, checklist: [], faqs: [], disclaimer },
  {
    id: 'permit',
    title: 'Residence Permit',
    available: false,
    sections: {},
    checklist: [],
    faqs: [],
    disclaimer,
  },
  {
    id: 'job',
    title: 'Student Job Rules',
    available: false,
    sections: {},
    checklist: [],
    faqs: [],
    disclaimer,
  },
  {
    id: 'emergency',
    title: 'Emergency Contacts',
    available: false,
    sections: {},
    checklist: [],
    faqs: [],
    disclaimer,
  },
];

/** Location hierarchy: Germany → Bavaria → Cham */
export const appData = {
  country: {
    id: 'germany',
    name: 'Germany',
    states: [
      {
        id: 'bavaria',
        name: 'Bavaria',
        cities: [
          {
            id: 'cham',
            name: 'Cham',
            selectable: true,
            dashboardTitle: 'Cham Setup Guide',
            modules: [anmeldungModule, ...comingSoonModules],
          },
        ],
      },
    ],
  } satisfies Country,
};

/** Helper: find a module by id across all cities */
export function getModuleById(moduleId: string): Module | undefined {
  for (const state of appData.country.states) {
    for (const city of state.cities) {
      const found = city.modules.find((m) => m.id === moduleId);
      if (found) return found;
    }
  }
  return undefined;
}

/** Helper: get the default selectable city (Cham for now) */
export function getDefaultCity(): City {
  return appData.country.states[0].cities[0];
}
