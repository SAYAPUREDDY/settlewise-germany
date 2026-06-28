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

export type LinkItem = {
  label: string;
  url: string;
};


export type ModuleSection = {
  whatIs?: string;
  requiredDocuments?: string[];
  steps?: string[];
  officialLinks?: LinkItem[];
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

// --- Deutschland Ticket module content ---

const deutschlandTicketModule: Module = {
  id: 'deutschlandTicket',
  title: 'Deutschland Ticket',
  available: true,

  sections: {
    whatIs:
      'The Deutschland Ticket is a monthly public transport ticket for travelling across Germany using local and regional transport. It is useful if you travel often by bus, tram, U-Bahn, S-Bahn, or regional train.',

    requiredDocuments: [
      'Valid passport or national ID',
      'Email address',
      'German address details',
      'Payment method',
      'German bank account or SEPA-supported bank account if the provider asks for SEPA direct debit',
      'University login or student details if your university offers a student ticket or upgrade',
    ],

    steps: [
      'Check if your university provides a semester ticket or Deutschland Ticket upgrade',
      'Choose where you want to buy the ticket',
      'Use DB Navigator, deutschlandticket.de, or your local transport provider app',
      'Create an account with your email address',
      'Enter your personal details correctly',
      'Add your payment method',
      'Buy or activate the Deutschland Ticket',
      'Save the ticket in the app',
      'Carry your passport or ID while travelling',
      'Use DB Navigator to check routes, train timings, platforms, and delays',
      'Cancel the subscription on time if you no longer need it',
    ],

    officialLinks: [
      {
        label: 'Download DB Navigator for Android',
        url: 'https://play.google.com/store/apps/details?id=de.hafas.android.db',
      },
      {
        label: 'Download DB Navigator for iOS',
        url: 'https://apps.apple.com/de/app/db-navigator/id343555245',
      },
    ],
  },

  checklist: [
    { id: '1', label: 'Check university ticket options' },
    { id: '2', label: 'Choose where to buy the ticket' },
    { id: '3', label: 'Set up your payment method' },
    { id: '4', label: 'Save the ticket in the app' },
    { id: '5', label: 'Install DB Navigator for route checks' },
    { id: '6', label: 'Carry your ID while travelling' },
    { id: '7', label: 'Cancel the subscription if you no longer need it' },
  ],

  faqs: [
    {
      id: 'faq-1',
      question: 'What is the Deutschland Ticket?',
      answer:
        'It is a monthly public transport ticket for local and regional transport across Germany.',
    },
    {
      id: 'faq-2',
      question: 'Where can I use the Deutschland Ticket?',
      answer:
        'You can use it on local and regional transport such as bus, tram, U-Bahn, S-Bahn, RB, and RE trains.',
    },
    {
      id: 'faq-3',
      question: 'Can I use it on ICE, IC, or EC trains?',
      answer:
        'No. The Deutschland Ticket is not valid on long-distance trains such as ICE, IC, or EC.',
    },
    {
      id: 'faq-4',
      question: 'Can I use it from the airport to my destination?',
      answer:
        'Yes, if the route uses local or regional transport. For example, S-Bahn, regional train, tram, or bus. It is not valid if the route uses ICE, IC, or EC trains.',
    },
    {
      id: 'faq-5',
      question: 'Do I need a German bank account?',
      answer:
        'Some providers may ask for a German IBAN or SEPA direct debit mandate. Some apps may also allow other payment methods such as PayPal, credit card, or Apple Pay. Always check before subscribing.',
    },
    {
      id: 'faq-6',
      question: 'Which app should I use to check routes and train timings?',
      answer:
        'You can use DB Navigator. It helps you check routes, train timings, platforms, delays, and local transport connections.',
    },
    {
      id: 'faq-7',
      question: 'Can I use DB Navigator even if I bought the ticket somewhere else?',
      answer:
        'Yes. You can still use DB Navigator to search routes, check timings, and plan your travel.',
    },
    {
      id: 'faq-8',
      question: 'Should I use the app suggested by my university?',
      answer:
        'Yes. If your university suggests a specific app or provider, use that for your student ticket or upgrade. You can still use DB Navigator separately for route checks.',
    },
    {
      id: 'faq-9',
      question: 'Is the Deutschland Ticket a one-time ticket?',
      answer:
        'No. It is usually a monthly subscription. It renews every month until you cancel it.',
    },
    {
      id: 'faq-10',
      question: 'Can someone else use my Deutschland Ticket?',
      answer:
        'No. The ticket is personal. You should carry your passport or ID while travelling.',
    },
    {
      id: 'faq-11',
      question: 'Is this app official?',
      answer:
        'No. SettleWise Germany is a student-friendly guide. Always confirm the latest price, payment rules, validity, and cancellation rules with the official provider.',
    },
  ],

  disclaimer,
};

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
      'Rental contract (from your landlord)',
      'Completed registration form (Will be provided at the office)',
    ],

    steps: [
      'Confirm your address in Cham',
      'Get Wohnungsgeberbestätigung from your landlord',
      'Check opening hours and documents on the city website',
      'Book an appointment online using the link below',
      'Visit Bürgerbüro / Rathaus Cham',
      'Submit your documents',
      'Receive Meldebestätigung (City Registration Certificate)',
      'Keep the document in a safe place',
    ],

    officialLinks: [
      {
        label: 'Book an appointment online',
        url: 'https://termin.cham.de/',
      },
    ],
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
            modules: [deutschlandTicketModule,anmeldungModule, ...comingSoonModules],
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
