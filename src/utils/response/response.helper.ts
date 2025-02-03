import { Request, Response, NextFunction } from 'express';
import { ApiResponse } from '../../types/utils/response.types';
const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Attach a custom method to `res` for all responses
  res.sendResponse = <T>(data: T, message: string = 'Request successful') => {
    const response: ApiResponse<T> = {
      success: true,
      message,
      data,
    };
    res.json(response);
  };

  // Handle error response (optionally, can be customized further)
  res.sendError = (error: string, message: string = 'An error occurred') => {
    const response: ApiResponse<null> = {
      success: false,
      message,
      error,
    };
    res.status(400).json(response); // Set the appropriate status code
  };

  next();
};

export default responseMiddleware;
