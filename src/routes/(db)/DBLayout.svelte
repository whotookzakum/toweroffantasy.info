<script>
    import { searchTerm } from "$lib/stores";
    import LocaleSelector from "./LocaleSelector.svelte";
    import VersionSelector from "./VersionSelector.svelte";
</script>

<slot />
<div class="flex g-50">
    <input type="text" placeholder="Search" bind:value={$searchTerm} />
    <VersionSelector />
    <LocaleSelector />
</div>
<ul>
    <slot name="search-results" />
</ul>

<style lang="scss">
    ul {
        --img-width: 140px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(var(--img-width), 1fr));
        padding: 0;
        gap: 1rem;
    }
</style>
