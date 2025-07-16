import { describe, expect, it } from 'vitest';
import { candidates, engineers, getOverlappingSlots } from '../src/assets/mockData';

describe('getOverlappingSlots', () => {
  it('returns correct overlapping slots for Arjun Krishna', () => {
    const candidate = candidates.find(c => c.name === 'Arjun Krishna')!;
    const overlap = getOverlappingSlots(candidate, engineers);
    // Arjun's preferred: Tuesday 14:00–17:00
    // Engineer availabilities:
    // Mark Zuckerberg: 2024-06-11T14:00, 14:30, 15:00
    // Elon Musk: 2024-06-11T14:00, 14:30, 15:00
    // Sam Altman: 2024-06-11T14:00, 14:30, 15:00
    expect(overlap).toEqual([
      '2024-06-11T14:00',
      '2024-06-11T14:30',
      '2024-06-11T15:00',
    ]);
  });

  it('returns empty if no engineer is available in candidate range', () => {
    const candidate = { ...candidates[0], preferredRange: { day: 0, start: '18:00', end: '19:00' } };
    const overlap = getOverlappingSlots(candidate, engineers);
    expect(overlap).toEqual([]);
  });
}); 