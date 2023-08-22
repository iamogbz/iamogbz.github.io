/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const { stringReplace } = require("string-replace-middleware");

// express app instance for serving web files
const app = express();
// support process.env in static served files
const staticReplacements = {
  "process.env": `(${JSON.stringify(getEnv())})`,
};
// content types that should be transformed
const contentTypes = buildStrings({
  "^": {
    "text/": true,
    "application/": {
      javascript: true,
      json: true,
      xml: true,
    },
  },
});
// attach the process env injection middleware
app.use(
  stringReplace(staticReplacements, {
    contentTypeFilterRegexp: RegExp(contentTypes.join("|")),
  })
);
// use service of static front files
app.use(express.static("frontend"));
// listen on configured host name and port
const port = Number(process.env.WEB_PORT);
const hostname = process.env.DOMAIN_NAME;
app.listen(port, hostname, () => {
  console.log(`Serving static: http://${hostname}:${port} 🌐`);
});
// -- helper functions
/**
 * Get the environment variables for use in app
 * @returns {Record<string, string>}
 */
function getEnv() {
  // /** @type {Record<string, string>} */
  // const processEnv = {};
  // require("dotenv").config({ processEnv });
  return process.env;
}
/**
 * Build list of strings from nested string structure
 * @template T
 * @param {T extends boolean ? boolean : Record<string, T>} content
 * @param {string} s
 * @returns {readonly string[]}
 */
function buildStrings(content, s = "") {
  if (typeof content === "boolean") return Object.freeze([s]);
  return Object.freeze(
    Object.keys(content).flatMap((k) => buildStrings(content[k], `${s}${k}`))
  );
}
