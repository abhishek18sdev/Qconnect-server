export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: string;
    checkPassword(password: string): Promise<boolean>;
    generateAcccessToken(): Promise<string>;
    generateRefreshToken(): Promise<string>;
  }
  