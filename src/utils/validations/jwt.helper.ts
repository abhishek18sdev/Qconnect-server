//  function for creating user access token when user is registered or logged in
import jwt from "jsonwebtoken";
export const generateAccessToken = async (user: any) => {
  try {
    const token = await jwt.sign(
      {
        _id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY || "secret",
      { expiresIn: "1d", algorithm: "HS256" },
    );
    console.log(token, "access token");
    return token;
  } catch (error) {
    console.log(error);
  }
};



export const generateRefreshToken = async (user: any) => {
    try {
      const token = await jwt.sign(
        {
          _id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET_KEY || "secret",
        { expiresIn: "1d", algorithm: "HS256" },
      );
      console.log(token, "refresh token");
      return token;
    } catch (error) {
      console.log(error);
    }
  };
  