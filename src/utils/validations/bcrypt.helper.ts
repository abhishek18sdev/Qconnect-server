import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  try {
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (
  password: string,
  databasePassword: string
) => {
  try {
    return await bcrypt.compare(password, databasePassword);
  } catch (error) {
    console.log(error);
  }
};
