import { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service";
import { loginSchema, registerSchema } from "../validators/auth.validator";

export async function loginHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const result = await authService.login(email, password);
    res.status(200).json({
      success: true,
      data: {
        token: result.token,
        user: {
          id: result.user._id,
          name: result.user.name,
          email: result.user.email,
          role: result.user.role,
          organizationName: result.user.organizationName
        }
      }
    });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message || "Login failed" } });
  }
}

export async function registerHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const body = registerSchema.parse(req.body);
    const result = await authService.register(body);
    res.status(201).json({
      success: true,
      data: {
        token: result.token,
        user: {
          id: result.user._id,
          name: result.user.name,
          email: result.user.email,
          role: result.user.role
        }
      }
    });
  } catch (err: any) {
    res.status(400).json({ success: false, error: { message: err.message || "Registration failed" } });
  }
}
