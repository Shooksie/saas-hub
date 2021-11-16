import { listen } from "./src/config";
import AuthEndpointsRouter from "./src/auth";

export class Tag {
  id: number | undefined;
  title: string | undefined;
}

AuthEndpointsRouter();
listen();
