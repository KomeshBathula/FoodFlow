import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';

export default function App() {
  return (
    <Router>
      <AppShell userRole="USER" userName="Guest User">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={
            <div style={{ padding: '24px' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
                Welcome to FoodFlow
              </h1>
              <p style={{ color: '#64748b' }}>
                AI-Powered Food Surplus Redistribution Platform prototype initialized.
              </p>
            </div>
          } />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </AppShell>
    </Router>
  );
}
