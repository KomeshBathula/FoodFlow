import { User, IUser } from "../models/User.model";
import { hashPassword, comparePassword, generateToken } from "../utils/security";

export class AuthService {
  async register(data: { name: string; email: string; password: string; role: any; organizationName?: string; phone?: string }) {
    const existing = await User.findOne({ email: data.email });
    if (existing) {
      throw new Error("Email already registered");
    }
    const passwordHash = await hashPassword(data.password);
    const user = await User.create({
      name: data.name,
      email: data.email,
      passwordHash,
      role: data.role || "USER",
      organizationName: data.organizationName,
      phone: data.phone
    });

    const token = generateToken({ id: user._id.toString(), email: user.email, role: user.role });
    return { user, token };
  }

  async login(email: string, pass: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    const isMatch = await comparePassword(pass, user.passwordHash);
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    const token = generateToken({ id: user._id.toString(), email: user.email, role: user.role });
    return { user, token };
  }
}

export const authService = new AuthService();
