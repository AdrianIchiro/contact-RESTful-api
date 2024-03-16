import { prismaClient } from "../application/database";
import { ResponseError } from "../error/error-response";
import { resgisterValidate } from "../validation/user-validation";
import { validate } from "../validation/validation";
import bcrypt from "bcrypt";
const register = async (request) => {
  const user = validate(resgisterValidate, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username,
    },
  });

  if (countUser === 1) {
    throw new ResponseError(400, "username exists");
  }

  user.password = bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true,
    },
  });
};

export default { register };
