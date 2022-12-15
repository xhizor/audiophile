/**
 * Gets the item from the local storage.
 *
 * @param key
 * @param json
 */
export const getLocalStorageData = (key: string, json = false): any => {
    let data = localStorage.getItem(key) ?? null;
    if (!data) {
        return null;
    }

    if (!json) {
        return data;
    }

    return JSON.parse(data);
};

/**
 * Sets the item to the local storage.
 *
 * @param key
 * @param data
 */
export const setLocalStorageData = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
};