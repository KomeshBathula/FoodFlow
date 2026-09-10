export type Role = "ADMIN" | "KITCHEN" | "NGO" | "DRIVER" | "USER";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  organizationName?: string;
}

export interface AuthResponse {
  success: boolean;
  data: {
    token: string;
    user: User;
  };
}
