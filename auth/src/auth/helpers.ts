import { CreateUserMutation } from "../generated/graphql";
import jwt from "jsonwebtoken";

const TOKEN_KEY = "sdkfjhsdkjhfsadkjhfgfhgfhgfhgfhg";

export const generateAccessTokenForUser = async (
  user: CreateUserMutation["insert_auth_one"]
) => {
  if (user) {
    return jwt.sign(
      {
        "https://hasura.io/jwt/claims": {
          "x-hasura-default-role": "user",
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-user-id": user?.id,
        },
        user,
      },
      TOKEN_KEY,
      {
        expiresIn: "36h",
      }
    );
  }
  throw new Error("User not provided");
};
