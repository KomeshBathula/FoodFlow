import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@foodflow.org");
  const [password, setPassword] = useState("demo123");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  const setRoleDemo = (roleEmail: string) => {
    setEmail(roleEmail);
    setPassword("demo123");
  };

  return (
    <div style={{
      maxWidth: '440px',
      margin: '60px auto',
      background: '#fff',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#059669', marginBottom: '8px', textAlign: 'center' }}>
        FoodFlow Portal Login
      </h2>
      <p style={{ color: '#64748b', fontSize: '0.875rem', textAlign: 'center', marginBottom: '24px' }}>
        AI-Powered Surplus Food Redistribution
      </p>

      {error && (
        <div style={{ background: '#fee2e2', color: '#b91c1c', padding: '10px', borderRadius: '6px', marginBottom: '16px', fontSize: '0.875rem' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px 12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px',
            background: '#059669',
            color: '#fff',
            fontWeight: 600,
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {loading ? "Authenticating..." : "Sign In"}
        </button>
      </form>

      <div style={{ marginTop: '24px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
        <p style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '8px', fontWeight: 600 }}>Quick Demo Profiles:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <button type="button" onClick={() => setRoleDemo("admin@foodflow.org")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>Admin</button>
          <button type="button" onClick={() => setRoleDemo("kitchen@foodflow.org")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>Kitchen</button>
          <button type="button" onClick={() => setRoleDemo("ngo@foodflow.org")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>NGO</button>
          <button type="button" onClick={() => setRoleDemo("driver@foodflow.org")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>Driver</button>
          <button type="button" onClick={() => setRoleDemo("user@foodflow.org")} style={{ fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}>User</button>
        </div>
      </div>
    </div>
  );
};
