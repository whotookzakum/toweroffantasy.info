import { writable, derived } from "svelte/store";

export const userLocale = writable("en") // en, es, pt, fr, de, id, ru, th, zh-cn, ja; no support for zh-hans-sg
export const userTimeZone = writable(undefined)

export const weaponLevel = writable([200]);
export const weaponStars = writable([0]);

export const bgImg = writable("");

export const showWepOnSimEntry = writable(true);

export const outfitsGender = writable("f");

export const guidebookCategory = writable("exploration");