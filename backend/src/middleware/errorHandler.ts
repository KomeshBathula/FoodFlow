import { Request, Response, NextFunction } from "express";

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  const status = err.statusCode || err.status || 500;
  const message = err.message || "Internal Server Error";
  const details = err.details || undefined;

  res.status(status).json({
    success: false,
    error: {
      message,
      status,
      details,
      timestamp: new Date().toISOString(),
    },
  });
}
