

export function removeSpace(string) {
    return string.toLowerCase().replace(/\s/g, '');
}

export function hyphenToSpace(string) {
    return string.replace(/-/g, ' ');
}