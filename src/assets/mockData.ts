// Engineers' availability: Mon-Fri, 9 AM–6 PM, 30-min slots
// Time format: 'YYYY-MM-DDTHH:mm' (ISO 8601, but only time is used for demo)

export type Engineer = {
  id: string;
  name: string;
  color: string;
  availability: string[]; // ISO strings for available slots
};

export type Candidate = {
  id: string;
  name: string;
  preferredRange: {
    day: number; // 0=Mon, 4=Fri
    start: string; // '14:00'
    end: string;   // '17:00'
  };
};

// Engineers: Famous tech leaders
export const engineers: Engineer[] = [
  {
    id: 'eng1',
    name: 'Mark Zuckerberg',
    color: '#4285F4',
    availability: [
      '2024-06-10T09:00', '2024-06-10T09:30', '2024-06-10T10:00',
      '2024-06-11T14:00', '2024-06-11T14:30', '2024-06-11T15:00',
      '2024-06-12T11:00', '2024-06-12T11:30',
      '2024-06-13T16:00', '2024-06-13T16:30',
      '2024-06-14T09:00', '2024-06-14T09:30',
    ],
  },
  {
    id: 'eng2',
    name: 'Elon Musk',
    color: '#EA4335',
    availability: [
      '2024-06-10T09:00', '2024-06-10T09:30', '2024-06-10T10:00',
      '2024-06-11T14:00', '2024-06-11T14:30', '2024-06-11T15:00',
      '2024-06-12T15:00', '2024-06-12T15:30',
      '2024-06-13T16:00', '2024-06-13T16:30',
      '2024-06-14T17:00', '2024-06-14T17:30',
    ],
  },
  {
    id: 'eng3',
    name: 'Sam Altman',
    color: '#FBBC05',
    availability: [
      '2024-06-10T11:00', '2024-06-10T11:30',
      '2024-06-11T14:00', '2024-06-11T14:30', '2024-06-11T15:00',
      '2024-06-12T09:00', '2024-06-12T09:30',
      '2024-06-13T13:00', '2024-06-13T13:30',
      '2024-06-14T15:00', '2024-06-14T15:30',
    ],
  },
];

// Candidates: All real, public Speer Technologies team members
export const candidates: Candidate[] = [
  { id: 'cand1', name: 'Arjun Krishna', preferredRange: { day: 1, start: '14:00', end: '17:00' } },
  { id: 'cand2', name: 'Rohit Goyal', preferredRange: { day: 3, start: '13:00', end: '16:00' } },
  { id: 'cand3', name: 'Siddharth Sharma', preferredRange: { day: 0, start: '10:00', end: '12:00' } },
  { id: 'cand4', name: 'Mathew Mozaffari', preferredRange: { day: 2, start: '09:30', end: '11:30' } },
  { id: 'cand5', name: 'Karan Agrawal', preferredRange: { day: 4, start: '15:00', end: '17:00' } },
  { id: 'cand6', name: 'Stephanie Loureiro', preferredRange: { day: 1, start: '11:00', end: '13:00' } },
  { id: 'cand7', name: 'Evan Eisenstadt', preferredRange: { day: 2, start: '14:00', end: '16:00' } },
  { id: 'cand8', name: 'Emelia Bayley', preferredRange: { day: 3, start: '09:00', end: '11:00' } },
  { id: 'cand9', name: 'Clement Shum', preferredRange: { day: 0, start: '13:00', end: '15:00' } },
  { id: 'cand10', name: 'Josie Najera', preferredRange: { day: 4, start: '10:00', end: '12:00' } },
  { id: 'cand11', name: 'Julia Pia', preferredRange: { day: 1, start: '16:00', end: '18:00' } },
  { id: 'cand12', name: 'Sid Bounadja', preferredRange: { day: 2, start: '11:00', end: '13:00' } },
  { id: 'cand13', name: 'Jad El Kassar', preferredRange: { day: 3, start: '14:00', end: '16:00' } },
  { id: 'cand14', name: 'Diego Castro', preferredRange: { day: 0, start: '09:00', end: '11:00' } },
  { id: 'cand15', name: 'Ahmar Ali', preferredRange: { day: 4, start: '13:00', end: '15:00' } },
  { id: 'cand16', name: 'Litao Chen', preferredRange: { day: 1, start: '10:00', end: '12:00' } },
  { id: 'cand17', name: 'Auguest Gao', preferredRange: { day: 2, start: '15:00', end: '17:00' } },
  { id: 'cand18', name: 'Harley Lovitos', preferredRange: { day: 3, start: '11:00', end: '13:00' } },
  { id: 'cand19', name: 'Eric Shin', preferredRange: { day: 0, start: '14:00', end: '16:00' } },
  { id: 'cand20', name: 'Md Mushfiqur Rahman', preferredRange: { day: 4, start: '09:30', end: '11:30' } },
  { id: 'cand21', name: 'Henry Yau', preferredRange: { day: 1, start: '13:00', end: '15:00' } },
  { id: 'cand22', name: 'Michael Akinmeji', preferredRange: { day: 2, start: '10:00', end: '12:00' } },
  { id: 'cand23', name: 'Andrew Caruso', preferredRange: { day: 3, start: '15:00', end: '17:00' } },
  { id: 'cand24', name: 'Chang Li', preferredRange: { day: 0, start: '11:00', end: '13:00' } },
  { id: 'cand25', name: 'Sean Gray', preferredRange: { day: 4, start: '14:00', end: '16:00' } },
  { id: 'cand26', name: 'Connor Doman', preferredRange: { day: 1, start: '09:00', end: '11:00' } },
  { id: 'cand27', name: 'Rushanshah Saiyed', preferredRange: { day: 2, start: '13:00', end: '15:00' } },
  { id: 'cand28', name: 'Kartikey Sharma', preferredRange: { day: 3, start: '10:00', end: '12:00' } },
];

export function getOverlappingSlots(candidate: Candidate, engineers: Engineer[]): string[] {
  // Only consider slots in candidate's preferred range
  const base = new Date(2024, 5, 10 + candidate.preferredRange.day); // June is 5
  const dateStr = `${base.getFullYear()}-${(base.getMonth()+1).toString().padStart(2,'0')}-${base.getDate().toString().padStart(2,'0')}`;
  const slots: string[] = [];
  let hour = parseInt(candidate.preferredRange.start.split(':')[0], 10);
  let min = parseInt(candidate.preferredRange.start.split(':')[1], 10);
  const [endHour, endMin] = candidate.preferredRange.end.split(':').map(Number);
  while (hour < endHour || (hour === endHour && min < endMin)) {
    const time = `${hour.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}`;
    const iso = `${dateStr}T${time}`;
    // At least one engineer available
    if (engineers.some(e => e.availability.includes(iso))) {
      slots.push(iso);
    }
    min += 30;
    if (min >= 60) {
      min = 0;
      hour++;
    }
  }
  return slots;
} 