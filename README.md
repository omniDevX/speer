<img width="200" height="200" alt="image" src="https://github.com/user-attachments/assets/724dca95-ed2c-4356-95a6-4d8bf13a1933" />

# SpeerCheck – Live Interview Scheduler

A frontend tool for recruiters at Speer to schedule interviews with candidates based on the availability of engineers.

## Features
- Select a candidate from a dropdown
- View a weekly calendar (Mon–Fri, 9 AM–6 PM, 30-min slots)
- See engineer availability (colored dots) and candidate's preferred range (highlighted)
- Overlapping slots (candidate + at least one engineer) are clearly marked and selectable
- Click a slot to schedule an interview (locks the slot for the session)
- Confirmation message with engineer, candidate, and time
- Desktop-first, clean, and user-friendly UI
- Unit test for availability intersection logic (using Vitest)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the app locally
```bash
npm run dev
```

### 3. Run unit tests
```bash
npx vitest run
```

## Deployment
Deploy to Vercel, Netlify, or any static host. Example:
- Build: `npm run build`
- Deploy the `dist/` folder

## Design Decisions
- **Component Structure:**
  - All logic is in `App.tsx` for simplicity (can be split for larger apps)
  - Mock data and logic in `src/assets/mockData.ts`
- **Availability Intersection:**
  - Pure function `getOverlappingSlots` (unit tested)
  - Calendar grid is generated dynamically for flexibility
- **UI/UX:**
  - Desktop-first, visually clear overlaps, color-coded engineers
  - Only valid slots are clickable; scheduled slots are locked and greyed out
  - Friendly confirmation and feedback
- **Testing:**
  - Focused on the core logic (overlap calculation)

## Assessment Requirements Checklist
- [x] Calendar view, candidate dropdown, engineer availability
- [x] Overlap logic, slot selection, confirmation
- [x] Unit test for logic
- [x] Clean, beautiful, and clear UI/UX
- [x] README with design decisions
- [x] Ready for deployment

---

**For any questions, contact me omnidevx@gmail.com.**
