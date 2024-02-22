import { writable, derived } from "svelte/store";
import { page } from "$app/stores"

export const userLocale = derived(page, ($page) => $page.url.searchParams.get('lang') || "en") // en, es, pt, fr, de, id, ru, th, zh-cn, ja; no support for zh-hans-sg

export const userTimeZone = writable(undefined)

export const weaponLevel = writable([200]);
export const weaponStars = writable([0]);

export const bgImg = writable("");

export const searchTerm = derived(page, ($page) => $page.url.searchParams.get('q') || "")
export const selectedElements = derived(page, ($page) => $page.url.searchParams.get('element') || "")

export const showWepOnSimEntry = writable(true);

export const outfitsGender = writable("f");