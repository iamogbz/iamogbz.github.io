// eslint-disable-next-line no-console
console.log("Hello Curious 👋🏾😸 https://github.com/iamogbz/iamogbz.github.io");
// index.html components
import "./components/button/animated-button.js";
import "./components/experiments/lab.js";
import "./components/experiments/tile.js";
import "./components/logo/animated-logo.js";
// index.html script
import { compareRepos, fetchRepos } from "./utils/github/repos.js";
import { includeTemplate } from "./utils/include-template.js";

includeTemplate({
  srcPath: "./templates/head.html",
  parentElement: document.head,
});

fetchRepos({ username: "iamogbz", count: 0 })
  .then(repos =>
    repos
      ?.filter(r => r.stargazers_count)
      .sort((a, b) => compareRepos({ a, b }))
      .map(r => `${r.name}|${r.description}`),
  )
  .then(repos => {
    const labElement = document.getElementById("lab");
    if (!labElement) return;
    labElement.dataset.experiments = repos?.join("|");
  });
