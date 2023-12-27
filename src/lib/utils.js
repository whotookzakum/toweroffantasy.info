import { goto } from "$app/navigation";
import { page } from "$app/stores";
import { browser } from "$app/environment";
import { get } from "svelte/store";

export function updateSearchParams(param, newValue) {
    const pageStore = get(page)
    
    if (!newValue) {
        pageStore.url.searchParams.delete(param);
    } else {
        pageStore.url.searchParams.set(param, newValue);
    }

    if (browser) {
        goto(`?${pageStore.url.searchParams.toString()}`, {
            noScroll: true,
            replaceState: false,
            keepFocus: true,
            invalidateAll: true,
        });
    }
}