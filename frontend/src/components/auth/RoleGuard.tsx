import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Role } from "../../types/auth";

export const RoleGuard: React.FC<{ allowedRoles: Role[]; children: React.ReactNode; fallback?: React.ReactNode }> = ({
  allowedRoles,
  children,
  fallback = <div style={{ padding: '24px', color: '#b91c1c' }}>Unauthorized: You do not have permission to view this view.</div>
}) => {
  const { user } = useAuth();
  if (!user || !allowedRoles.includes(user.role)) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
};
