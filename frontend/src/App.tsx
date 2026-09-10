import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppShell } from './components/layout/AppShell';
import { Login } from './pages/Login';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  return (
    <AppShell userRole={user?.role || "GUEST"} userName={user?.name || "Guest"} onLogout={logout}>
      {children}
    </AppShell>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={
            <MainLayout>
              <div style={{ padding: '24px' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '8px' }}>
                  Platform Overview
                </h1>
                <p style={{ color: '#64748b' }}>
                  FoodFlow AI surplus redistribution platform operational overview.
                </p>
              </div>
            </MainLayout>
          } />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
