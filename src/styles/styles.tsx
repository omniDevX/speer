// Centralized style objects for App.tsx

export const engineerListLabel: React.CSSProperties = {
  fontWeight: 500,
  fontSize: 15,
  display: 'block',
  textAlign: 'center',
  marginBottom: 12,
};

export const engineerListContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 16,
};

export const engineerItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: 17,
  background: '#f7f7fa',
  borderRadius: 10,
  padding: '8px 22px',
  boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
  minWidth: 220,
  justifyContent: 'center',
};

export const engineerDot = (color: string): React.CSSProperties => ({
  display: 'inline-block',
  width: 20,
  height: 20,
  borderRadius: '50%',
  background: color,
  border: '2.5px solid #fff',
  marginRight: 3,
  boxShadow: `0 0 0 2px ${color}33`,
});

export const engineerName: React.CSSProperties = {
  fontWeight: 700,
};

export const selectLabel: React.CSSProperties = {
  fontWeight: 500,
  marginRight: 8,
};

export const selectBox: React.CSSProperties = {
  padding: '6px 12px',
  borderRadius: 6,
  border: '1px solid #d0d0d0',
  fontSize: 15,
};

export const sectionTitle: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 18,
  marginBottom: 18,
  color: '#1a2340',
  textAlign: 'left',
  paddingLeft: 2,
  textTransform: 'uppercase',
  letterSpacing: '0.04em',
};

export const sectionContainer: React.CSSProperties = {
  marginBottom: 36,
  padding: '0 0 0 0',
};

export const engineerSectionBox: React.CSSProperties = {
  background: 'linear-gradient(90deg, #f7faff 60%, #f0f4ff 100%)',
  borderRadius: 14,
  boxShadow: '0 4px 24px 0 rgba(30,60,120,0.07)',
  padding: '24px 18px 18px 18px',
  marginTop: 32,
  minWidth: 260,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
};

export const listContainer: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  width: '100%',
  alignItems: 'flex-start',
};

export const listItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: 16,
  background: '#f3f6fa',
  borderRadius: 10,
  padding: '8px 18px',
  boxShadow: '0 1px 6px rgba(0,0,0,0.04)',
  minWidth: 220,
  justifyContent: 'flex-start',
  width: '100%',
}; 