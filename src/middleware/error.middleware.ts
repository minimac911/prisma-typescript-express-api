import { NextFunction, Response, Request } from "express";

/**
 * GET /*
 */
export function errorMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.sendStatus(404);
  next();
}
