/**
 * Include a template file in the current html document
 * @param {{ srcPath: string; parentElement: HTMLElement | ShadowRoot }} params
 */
export function includeTemplate({ srcPath, parentElement }) {
  fetch(srcPath)
    .then(response => response.text())
    .then(templateContent => {
      const doc = new DOMParser().parseFromString(templateContent, "text/html");
      parentElement.appendChild(doc.documentElement.cloneNode(true));
    });
}
