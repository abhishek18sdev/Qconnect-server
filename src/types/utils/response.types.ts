    
// Extend the Response interface to include the custom methods
export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data?: T;
    error?: string;
  }
  
declare global {
  namespace Express {
    interface Response {
      sendResponse<T>(data: T, message?: string): void;
      sendError(error: string, message?: string): void;
    }
  }
}
