

export const convertToArray = obj => {
    if (obj) return Object.keys(obj).map(key => obj[key]);
    else return [];
}