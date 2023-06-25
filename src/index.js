// eslint-disable-next-line no-console
console.log("Hello Curious 👋🏾😸 https://github.com/iamogbz/iamogbz.github.io");
// index.html components
import "./components/button/animated-button.js";
import "./components/experiments/lab.js";
import "./components/experiments/tile.js";
import "./components/logo/animated-logo.js";
// index.html script
import { includeTemplate } from "./utils/include-template.js";

includeTemplate({
  srcPath: "./templates/head.html",
  parentElement: document.head,
});
