export function getData(userId) {
  return JSON.parse(localStorage.getItem(`stored-data-user-${userId}`));
}

/**
 * Store data for a specific user. If there was already data for this user, this function preserves it and adds the new data at the end.
 *
 * @param {string} userId The user id to store data for
 * @param {any[]} data The data to store
 */
export function addData(userId, data) {
  const key = `stored-data-user-${userId}`;

  const existingData = getData(userId) || [];
  const newData = existingData.concat(data);

  localStorage.setItem(key, JSON.stringify(newData));
}

/**
 * Clears all data associated with a specific user. NOTE: This is provided to help with development, and is not required in the final code
 *
 * @param {string} userId The user id to clear associated data for
 */
export function clearData(userId) {
  localStorage.removeItem(`stored-data-user-${userId}`);
}
