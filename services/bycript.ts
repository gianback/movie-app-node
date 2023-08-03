import { hash, compare } from "bcryptjs";
export const encryp = async (pass: string) => {
  const passwordHas = await hash(pass, 8);
  return passwordHas;
};

export const verify = async (pass: string, passHash: string) => {
  const passwordVerified = await compare(pass, passHash);
  return passwordVerified;
};
