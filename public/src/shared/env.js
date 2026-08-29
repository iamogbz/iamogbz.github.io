/**
 * Returns the env app base url from config in dev or window location when deployed
 */
export function getApiBaseUrl() {
  return getEnv("API_BASE_URL") ?? window.location.origin;
}

/**
 * @param {string} name
 */
function getEnv(name) {
  try {
    return process.env[name];
  } catch (e) {
    console.log(e);
  }
}
