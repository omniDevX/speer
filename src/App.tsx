import { useState } from 'react';
import './App.css';
import { candidates, engineers, type Engineer } from './assets/mockData';
import {
    engineerDot,
    engineerName,
    engineerSectionBox,
    listContainer,
    listItem,
    sectionContainer,
    sectionTitle,
    selectBox,
} from './styles/styles';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const START_HOUR = 9;
const END_HOUR = 18;
const SLOT_DURATION = 30; // minutes

function generateTimeSlots() {
    const slots: { day: number; time: string }[] = [];
    for (let day = 0; day < 5; day++) {
        for (let hour = START_HOUR; hour < END_HOUR; hour++) {
            slots.push({ day, time: `${hour.toString().padStart(2, '0')}:00` });
            if (hour !== END_HOUR - 1) {
                slots.push({ day, time: `${hour.toString().padStart(2, '0')}:30` });
            }
        }
    }
    return slots;
}
const timeSlots = generateTimeSlots();

function App() {
    // Set default candidate to Arjun Krishna
    const [selectedCandidateId, setSelectedCandidateId] = useState<string>('cand1');
    const selectedCandidate = candidates.find(c => c.id === selectedCandidateId) || null;
    const [scheduled, setScheduled] = useState<{ iso: string; engineer: Engineer } | null>(null);

    // Helper: get ISO string for a slot
    const getSlotISO = (day: number, time: string) => {
        // Use a fixed week for demo: 2024-06-10 (Monday)
        const base = new Date(2024, 5, 10 + day); // June is month 5 (0-indexed)
        return `${base.getFullYear()}-${(base.getMonth() + 1).toString().padStart(2, '0')}-${base.getDate().toString().padStart(2, '0')}T${time}`;
    };

    // Helper: is slot in candidate's preferred range
    const isInCandidateRange = (day: number, time: string) => {
        if (!selectedCandidate) return false;
        if (day !== selectedCandidate.preferredRange.day) return false;
        return time >= selectedCandidate.preferredRange.start && time < selectedCandidate.preferredRange.end;
    };

    // Helper: which engineers are available for a slot
    const getEngineersForSlot = (iso: string) =>
        engineers.filter(e => e.availability.includes(iso));

    // Helper: is slot an overlap (candidate + at least one engineer)
    const isOverlapSlot = (day: number, time: string) => {
        if (!selectedCandidate) return false;
        if (!isInCandidateRange(day, time)) return false;
        const iso = getSlotISO(day, time);
        return getEngineersForSlot(iso).length > 0;
    };

    // Helper: is slot locked (already scheduled)
    const isLocked = (iso: string) => scheduled?.iso === iso;

    // Handle slot click
    const handleSlotClick = (day: number, time: string) => {
        if (!selectedCandidate) return;
        const iso = getSlotISO(day, time);
        if (!isOverlapSlot(day, time) || isLocked(iso)) return;
        // Pick the first available engineer for this slot
        const availableEngineers = getEngineersForSlot(iso);
        if (availableEngineers.length === 0) return;
        setScheduled({ iso, engineer: availableEngineers[0] });
    };

    // Helper: get display for scheduled slot
    const getScheduledDisplay = () => {
        if (!scheduled || !selectedCandidate) return null;
        const date = new Date(scheduled.iso);
        const day = DAYS[date.getDay() - 1];
        const time = scheduled.iso.split('T')[1];
        return (
            <div className="confirmation-box">
                <strong>Interview Scheduled!</strong><br />
                Candidate: {selectedCandidate.name}<br />
                Engineer: <span style={{ color: scheduled.engineer.color }}>{scheduled.engineer.name}</span><br />
                Time: {day} {time}
            </div>
        );
    };

    return (
        <div className="speer-app-container">
            <div className="speer-details-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, textAlign: 'center', marginBottom: 32, letterSpacing: 0.5 }}>Front End Assessment</h2>
                <div style={{ ...sectionContainer, flex: 0 }}>
                    <div style={sectionTitle}>Select Candidate</div>
                    <label htmlFor="candidate-select" style={{ display: 'none' }}>Select Candidate</label>
                    <div style={listContainer}>
                        <select
                            id="candidate-select"
                            value={selectedCandidateId}
                            onChange={e => setSelectedCandidateId(e.target.value)}
                            style={selectBox}
                        >
                            <option value="">-- Choose --</option>
                            {candidates.map(candidate => {
                                const day = DAYS[candidate.preferredRange.day];
                                const range = `${day} ${candidate.preferredRange.start}–${candidate.preferredRange.end}`;
                                return (
                                    <option key={candidate.id} value={candidate.id}>
                                        {candidate.name} ({range})
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <div style={{ flexGrow: 1, minHeight: 0 }} />
                <div style={engineerSectionBox}>
                    <div style={sectionTitle}>Engineer Availability</div>
                    <div style={listContainer}>
                        {engineers.map(e => (
                            <span key={e.id} style={listItem}>
                                <span style={engineerDot(e.color)} />
                                <span style={engineerName}>{e.name}</span>
                            </span>
                        ))}
                    </div>
                </div>
                {getScheduledDisplay()}
            </div>
            <div className="speer-calendar-panel">
                <div className="calendar-grid">
                    <div className="calendar-header-row">
                        <div className="calendar-header-cell" />
                        {DAYS.map(day => (
                            <div key={day} className="calendar-header-cell">{day}</div>
                        ))}
                    </div>
                    {Array.from({ length: (END_HOUR - START_HOUR) * 2 }, (_, i) => {
                        const hour = START_HOUR + Math.floor(i / 2);
                        const min = i % 2 === 0 ? '00' : '30';
                        const label = `${hour.toString().padStart(2, '0')}:${min}`;
                        return (
                            <div className="calendar-row" key={label}>
                                <div className="calendar-time-cell">{label}</div>
                                {DAYS.map((day, dayIdx) => {
                                    // dayIdx is 0=Mon, 1=Tue, ...
                                    const iso = getSlotISO(dayIdx, label);
                                    const engineersHere = getEngineersForSlot(iso);
                                    const inCandidate = isInCandidateRange(dayIdx, label);
                                    return (
                                        <div
                                            className="calendar-slot-cell"
                                            key={dayIdx}
                                            style={{
                                                background: isLocked(iso)
                                                    ? '#d3d3d3'
                                                    : isOverlapSlot(dayIdx, label)
                                                        ? '#b2f2d7'
                                                        : inCandidate
                                                            ? '#e3f6ff'
                                                            : '#fff',
                                                position: 'relative',
                                                border: isOverlapSlot(dayIdx, label) && !isLocked(iso)
                                                    ? '2px solid #38d9a9'
                                                    : undefined,
                                                opacity: isLocked(iso) ? 0.5 : 1,
                                                cursor: isOverlapSlot(dayIdx, label) && !isLocked(iso) ? 'pointer' : 'default',
                                            }}
                                            onClick={() => handleSlotClick(dayIdx, label)}
                                        >
                                            {engineersHere.length > 0 && (
                                                <div style={{ display: 'flex', gap: 2, position: 'absolute', left: 6, top: 6 }}>
                                                    {engineersHere.map(e => (
                                                        <span
                                                            key={e.id}
                                                            title={e.name}
                                                            style={{
                                                                display: 'inline-block',
                                                                width: 10,
                                                                height: 10,
                                                                borderRadius: '50%',
                                                                background: e.color,
                                                                border: '1.5px solid #fff',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
