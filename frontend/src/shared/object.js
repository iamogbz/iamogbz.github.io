/**
 * @template T
 * @param {T extends {} ? T : never} obj
 * @returns {readonly (keyof T)[] | undefined}
 */
export function keys(obj) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return Object.freeze(obj && Object.keys(obj));
}

/**
 * @template T
 * @param {T extends {} ? T : never} obj
 */
export function values(obj) {
  return Object.freeze(keys(obj)?.map((k) => obj[k]));
}
