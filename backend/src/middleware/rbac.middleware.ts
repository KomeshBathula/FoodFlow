import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./auth.middleware";

export function requireRole(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, error: { message: "Unauthenticated" } });
    }
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: { message: `Forbidden: role ${req.user.role} is not authorized for this resource` }
      });
    }
    next();
  };
}
