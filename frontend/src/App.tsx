import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AppShell } from './components/layout/AppShell';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { KitchenDashboard } from './pages/KitchenDashboard';
import { NgoDashboard } from './pages/NgoDashboard';
import { DriverDashboard } from './pages/DriverDashboard';
import { UserDashboard } from './pages/UserDashboard';
import { FoodBatches } from './pages/FoodBatches';
import { Redistributions } from './pages/Redistributions';
import { Tracking } from './pages/Tracking';
import { Analytics } from './pages/Analytics';
import { Alerts } from './pages/Alerts';
import { Audit } from './pages/Audit';
import { ProtectedRoute } from './components/auth/ProtectedRoute';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  return (
    <AppShell userRole={user?.role || "USER"} userName={user?.name || "Guest Observer"} onLogout={logout}>
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
              <UserDashboard />
            </MainLayout>
          } />

          <Route path="/admin" element={
            <ProtectedRoute>
              <MainLayout>
                <AdminDashboard />
              </MainLayout>
            </ProtectedRoute>
          } />

          <Route path="/kitchen" element={
            <ProtectedRoute>
              <MainLayout>
                <KitchenDashboard />
              </MainLayout>
            </ProtectedRoute>
          } />

          <Route path="/ngo" element={
            <ProtectedRoute>
              <MainLayout>
                <NgoDashboard />
              </MainLayout>
            </ProtectedRoute>
          } />

          <Route path="/driver" element={
            <ProtectedRoute>
              <MainLayout>
                <DriverDashboard />
              </MainLayout>
            </ProtectedRoute>
          } />

          <Route path="/food-batches" element={
            <MainLayout>
              <FoodBatches />
            </MainLayout>
          } />

          <Route path="/redistributions" element={
            <MainLayout>
              <Redistributions />
            </MainLayout>
          } />

          <Route path="/tracking" element={
            <MainLayout>
              <Tracking />
            </MainLayout>
          } />

          <Route path="/analytics" element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          } />

          <Route path="/alerts" element={
            <MainLayout>
              <Alerts />
            </MainLayout>
          } />

          <Route path="/audit" element={
            <ProtectedRoute>
              <MainLayout>
                <Audit />
              </MainLayout>
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
