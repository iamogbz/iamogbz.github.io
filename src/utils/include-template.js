/**
 * Include a template file in the current html document
 * @param {{ srcPath: string; parentElement: HTMLElement | ShadowRoot }} params
 */
export function includeTemplate({ srcPath, parentElement }) {
  fetch(srcPath)
    .then(response => response.text())
    .then(templateContent => {
      parentElement.innerHTML += templateContent;
    });
}
