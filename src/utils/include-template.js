/**
 * Include a template file in the current html document
 * @param {{ srcPath: string; parentElement: HTMLElement | ShadowRoot }} params
 */
export async function includeTemplate({ srcPath, parentElement }) {
  const response = await fetch(srcPath);
  const templateContent = await response.text();
  const doc = new DOMParser().parseFromString(templateContent, "text/html");
  parentElement.append(
    ...Array.from(doc.head.childNodes),
    ...Array.from(doc.body.childNodes),
  );
}
