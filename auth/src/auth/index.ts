import {Mutation_RootSignInArgs, Mutation_RootSignUpArgs,} from "../generated/graphql";
import {client} from "../graphql";
import bcrypt from "bcrypt";
import app from "../config";
import {generateAccessTokenForUser} from "./helpers";

const saltRounds = 10;

async function signUpHandler(args: Mutation_RootSignUpArgs) {
  const res = await client.CreateUser({
    ...args.signUpArgs,
    password: await bcrypt.hash(args.signUpArgs.password, saltRounds),
  });

  console.log(res);

  if (res.insert_auth_one?.id) {
    return {
      accessToken: await generateAccessTokenForUser(res.insert_auth_one),
      userId: res.insert_auth_one?.id,
    };
  } else {
    // @ts-ignore
    const error = res?.errors[0]
    throw new Error(error?.message || 'Error occurred');
  }
}

async function signInHandler(args: Mutation_RootSignInArgs) {
  const res = await client.GetUserByUserNameOrEmail({
    username: args.signInArgs.username,
  });

  if (
    res?.checkusername?.length === 1 &&
    bcrypt.compareSync(
      args.signInArgs?.password,
      res.checkusername[0]?.password
    )
  ) {
    return {
      accessToken: await generateAccessTokenForUser(res.checkusername[0]),
      userId: res.checkusername[0]?.id,
    };
  } else {
    throw new Error("Invalid username/email or password");
  }
}

const AuthEndpointsRouter = () => {
  app.post("/signup", async (req, res) => {
    const params: Mutation_RootSignUpArgs = req.body.input;
    console.log(params);

    try {
      const result = await signUpHandler(params);
      console.log(result);

      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(409).send({
        message: e,
      });
    }
  });

  app.post("/sign-in", async (req, res) => {
    const params: Mutation_RootSignInArgs = req.body.input;
    try {
      const result = await signInHandler(params);
      res.send(result);
    } catch (e) {
      res.status(400).json({
        message: e,
      });
    }
  });
};

export default AuthEndpointsRouter;
