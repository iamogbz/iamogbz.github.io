/**
 * Include a template file in the current html document
 * @param {{ srcPath: string; parentElement: HTMLElement | ShadowRoot }} params
 */
export async function includeTemplate({ srcPath, parentElement }) {
  const fetchTemplateResponse = await fetch(srcPath);
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
  const templateDoc = new DOMParser().parseFromString(
    await fetchTemplateResponse.text(),
    "text/html",
  );
  // Permitted content. One <head> element, followed by one <body> element.
  parentElement.append(
    ...Array.from(templateDoc.head.childNodes),
    ...Array.from(templateDoc.body.childNodes),
  );
}
