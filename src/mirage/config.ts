import { Server } from "@miragejs/server";

import * as models from "./models";
import * as scenarios from "./scenarios";
import * as factories from "./factories";

type Options = {
  environment: string;
};

const configureModels = () => models;
const configureFactories = () => factories;
const configureScenarios = () => scenarios;

export const startMirage = (options: Options) => {
  let server = new Server({
    models: configureModels(),
    factories: configureFactories(),
    scenarios: configureScenarios(),
    baseConfig() {
      this.namespace = "api";

      // the following will respond with a JSON payload
      // containing all users
      this.get("/users");

      this.passthrough();
    },
    ...options
  });
  return server;
};
