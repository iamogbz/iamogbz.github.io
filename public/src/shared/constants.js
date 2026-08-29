import { getApiBaseUrl } from "./env.js";

export const Api = {
  get HELLO() {
    return {
      url: this.url`/hello`,
      mock: {
        message: "",
        input: {},
      },
    };
  },

  url(path) {
    if (!path) throw new Error(`Path has no value: '${path}'`);
    return `${getApiBaseUrl()}/api${path}`;
  },
};

export const Page = {
  HOME: {
    path: "/",
    pattern: "(/(index(.html)?)?)?",
  },
};
