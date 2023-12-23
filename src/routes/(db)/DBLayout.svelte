<script>
    import { searchTerm, userLocale } from "$lib/stores";
    import LocaleSelector from "./LocaleSelector.svelte";
    import VersionSelector from "./VersionSelector.svelte";
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment"

    function updateSearchParams(param, newValue) {
        if (!newValue || (param === "version" && newValue === "glob") || (param === "lang" && newValue === "en")) {
            $page.url.searchParams.delete(param)
        }
        else {
            $page.url.searchParams.set(param, newValue)
        }

        if (browser) {
            goto(`?${$page.url.searchParams.toString()}`, {
                noScroll: true,
                replaceState: false,
                keepFocus: true,
                invalidateAll: true,
            });
        }
    }
</script>

<slot />
<div class="flex g-50">
    <input
        type="text"
        placeholder="Search"
        bind:value={$searchTerm}
        on:input={() => updateSearchParams("q", $searchTerm)}
    />
    <!-- <VersionSelector {updateSearchParams} /> -->
    <!-- <LocaleSelector inputFunction={updateSearchParams('lang', $userLocale)} /> -->
</div>
<ul class="entry-list">
    <slot name="search-results" />
</ul>