import { writable, derived } from "svelte/store";
import { page } from "$app/stores"

export const gameVersion = derived(page, ($page) => $page.url.searchParams.get('version') || "glob") // glob or cn
export const userLocale = derived(page, ($page) => $page.url.searchParams.get('lang') || "en") // en, es, pt, fr, de, id, ru, th, zh-cn, ja; no support for zh-hans-sg
export const searchTerm = derived(page, ($page) => $page.url.searchParams.get('q') || "")

export const userTimeZone = writable(undefined)

export const weaponLevel = writable(200);

export const bgImg = writable("");