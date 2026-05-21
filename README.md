# SettleWise Germany

A guide app for international students settling in Germany. It provides city-based step-by-step checklists for important tasks after arriving (Anmeldung, SIM card, bank account, and more).

## Tech stack

| Layer | Technology |
|-------|------------|
| Mobile app | React Native, Expo, TypeScript, Expo Router |
| Local storage | AsyncStorage (checklist progress) |
| Backend | FastAPI, Uvicorn, Pydantic |

## Current MVP features

- Welcome screen → city selection (Germany → Bavaria → Cham)
- Cham home dashboard with module cards
- Full **City Registration / Anmeldung** guide with sections, checklist, FAQ, official link, disclaimer
- Checklist progress saved on device (persists after app restart)
- Other modules show “Coming Soon” alert
- Minimal backend: `GET /` and `GET /health` with CORS enabled

## Folder structure

```
settlewise-germany/          # Git repo root
├── README.md
├── requirements.txt       # Python dependencies (backend)
├── backend/
│   ├── main.py              # FastAPI app entry
│   ├── schemas.py           # API response models (expand later)
│   └── routers/
│       └── health.py        # Health check route
├── myenv/                   # Your Python virtualenv (local)
└── settlewise-germany/      # Expo React Native frontend
    ├── src/
    │   ├── app/             # Screens (Expo Router file-based routes)
    │   │   ├── index.tsx          # Welcome
    │   │   ├── city-select.tsx
    │   │   ├── home.tsx
    │   │   └── module/[id].tsx
    │   ├── components/
    │   ├── data/appData.ts  # Editable content (cities, modules, FAQs)
    │   ├── utils/storage.ts
    │   └── constants/colors.ts
    └── package.json
```

> **Note:** The frontend lives in `settlewise-germany/` (the Expo app folder), not a separate `mobile/` folder. Routes match your plan under `src/app/`.

## Run commands

### Frontend (Expo)

```bash
cd settlewise-germany
npm install
npm start
```

Then press `a` for Android emulator, or scan the QR code with **Expo Go** on your phone.

### Backend (FastAPI)

```bash
# From repo root — activate your venv first, e.g.:
# Windows:  myenv\Scripts\activate
# macOS/Linux:  source myenv/bin/activate

pip install -r requirements.txt
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Test in browser:

- http://localhost:8000/ → `settlewise-germany backend is running`
- http://localhost:8000/health → `{"status":"ok"}`
- http://localhost:8000/docs → interactive API docs

## Test on Android with Expo Go

1. Install [Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent) on your Android phone.
2. On your PC, run `npm start` inside `settlewise-germany/`.
3. Connect phone and PC to the **same Wi‑Fi**.
4. Scan the QR code from the terminal (or Expo Dev Tools in the browser).
5. The app opens in Expo Go. Walk through: Get Started → Cham → Anmeldung → check a few checklist items → close and reopen the app to confirm progress is saved.

If the QR code does not connect, try tunnel mode: `npx expo start --tunnel`.

## Future development plan

- [ ] More cities and states in `appData.ts`
- [ ] Content for SIM, bank, health insurance, and other modules
- [ ] FastAPI endpoints for cities/modules (optional CMS later)
- [ ] PostgreSQL database when content needs central management
- [ ] User accounts (only if needed)
- [ ] Connect frontend to backend APIs when ready

## License

See [LICENSE](LICENSE).
