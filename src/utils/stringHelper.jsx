export function removeSpace(string) {
    return string.toLowerCase().replace(/\s/g, '');
}

export function hyphenToSpace(string) {
    return string.replace(/-/g, ' ');
}

export function getItemByName(requestedItem, itemList) {
    return itemList.find((item) => removeSpace(item.name) === requestedItem);
}

export function getItemNameWithSpaces(requestedItem, itemList) {
    let result = "";
    itemList.find((item) => {
        if (removeSpace(item.name) === requestedItem) result = item.name
    });
    return result;
}