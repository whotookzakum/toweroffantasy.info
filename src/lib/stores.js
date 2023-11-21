import { writable } from "svelte/store";

export const gameVersion = writable("glob") // glob or cn
export const userLocale = writable("en") // en, es, pt, fr, de, id, ru, th, zh-cn, ja; no support for zh-hans-sg
export const searchTerm = writable("") // glob or cn