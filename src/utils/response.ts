import { Response } from "express";

export const constructResponse = (
  res: Response,
  message: string,
  statusCode: number,
  data: any,
  error = null
) => {
  return res.status(statusCode).json({
    message,
    statusCode,
    data,
    error,
  });
};
