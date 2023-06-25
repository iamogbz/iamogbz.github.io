const DEFAULT_FETCH_REPO_COUNT = 100;

/**
 * Fetch repos for a specific user
 * @param {{ username: string, count?: number }} params
 */
export async function fetchRepos({
  username,
  count = DEFAULT_FETCH_REPO_COUNT,
}) {
  const perPage = Math.min(DEFAULT_FETCH_REPO_COUNT, count);

  const results = [];
  let hasNext = true;
  let pageNum = 1;
  try {
    while (hasNext && results.length < count) {
      const apiUrl = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${pageNum}`;
      const response = await fetch(apiUrl);
      if (!response.ok) throw response;
      const page = Array.from(await response.json());
      hasNext = page.length >= perPage;
      results.push(...page);
      pageNum += 1;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return results;
}

/**
 * Compare repos and provide sort ordinal
 * @param {Record<"a"|"b", { stargazers_count: number, updated_at: string }>} params
 * @returns {number}
 */
export function compareRepos({ a, b }) {
  return repoKey(a).localeCompare(repoKey(b));
}

/**
 * Create key for sorting github repo
 * @param {{ stargazers_count: number, updated_at: string }} r
 * @returns {string}
 */
function repoKey(r) {
  return `${r.stargazers_count}_${r.updated_at}}`;
}
