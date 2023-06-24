import { includeTemplate } from "./src/utils/include-template.js";

includeTemplate({
  srcPath: "src/templates/head.html",
  parentElement: document.head,
});
