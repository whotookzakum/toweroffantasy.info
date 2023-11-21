<script>
    import { searchTerm } from "$lib/stores";

    import LinkSliderGroup from "./LinkSliderGroup.svelte";
    import LocaleSelector from "./LocaleSelector.svelte";
    import VersionSelector from "./VersionSelector.svelte";

    const links = [
        {
            name: "All",
            href: "/",
        },
        {
            name: "Simulacra",
            href: "/simulacra",
        },
        {
            name: "Weapons",
            href: "/weapons",
        },
        {
            name: "Matrices",
            href: "/matrices",
        },
        {
            name: "Relics",
            href: "/relics",
        },
        {
            name: "Exploration",
            href: "/exploration",
        },
        {
            name: "Food",
            href: "/food",
        },
        {
            name: "Mounts",
            href: "/mounts",
        },
        {
            name: "Cosmetics",
            href: "/cosmetics",
        },
    ];
</script>

<div class="db-nav grid g-50">
    <nav>
        <LinkSliderGroup data={links} />
    </nav>
    <div class="flex g-50">
        <input type="text" placeholder="Search" bind:value={$searchTerm} />
        <!-- <VersionSelector /> -->
    </div>
    <!-- <LocaleSelector /> -->
</div>

<style lang="scss">
    .db-nav {
        font-size: var(--step--1);
    }    
</style>
