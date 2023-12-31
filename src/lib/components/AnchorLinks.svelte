<script>
    import { page } from "$app/stores";
    import Ad from "$components/Ad/Ad.svelte";
    import Tag from "./Tag.svelte";
    export let simulacrum_v2, weapon, matrix;

    const relatedLinks = [];

    if (simulacrum_v2) {
        relatedLinks.push({
            name: simulacrum_v2.name,
            href: `/simulacra/${simulacrum_v2.id}`,
            type: "simulacrum",
        });
    }

    if (weapon) {
        relatedLinks.push({
            name: weapon.name,
            href: `/weapons/${weapon.id}`,
            type: "weapon",
        });
    }

    if (matrix) {
        relatedLinks.push({
            name: matrix.name,
            href: `/matrices/${matrix.id}`,
            type: "matrix",
        });
    }

    const anchorLinks = [];

    if ($page.url.pathname.includes("/simulacra")) {
        anchorLinks.push(
            {
                name: "Awakening",
                href: "#awakening",
            },
            {
                name: "Profile",
                href: "#profile",
            },
            {
                name: "Voice Actors",
                href: "#voice-actors",
            },
            {
                name: "Banners",
                href: "#banners",
            },
        );
    } else if ($page.url.pathname.includes("/weapons")) {
        anchorLinks.push(
            {
                name: "Weapon Effects",
                href: "#effects",
            },
            {
                name: "Advancements",
                href: "#advancements",
            },
            {
                name: "Skills",
                href: "#skills",
            },
            {
                name: "Meta",
                href: "#meta",
            },
            {
                name: "Banners",
                href: "#banners",
            },
        );
    }
</script>

<div class="grid g-100">
    {#if relatedLinks.length > 0}
        <h2 class="section-title">Related Items</h2>
        <nav class="grid">
            {#each relatedLinks as link}
                <a
                    class="flex g-25"
                    href={link.href}
                    class:active={$page.url.pathname.includes(link.href)}
                    >{link.name} <Tag type={link.type} /></a
                >
            {/each}
        </nav>
    {/if}
    <p class="section-title">
        Jump to section
    </p>
    <nav class="grid">
        {#each anchorLinks as link}
            <a href={link.href}>{link.name}</a>
        {/each}
    </nav>
    <!-- <Ad unit="Gutter" /> -->
</div>

<style lang="scss">
    nav {
        margin-left: 0.25rem;
        margin-bottom: 1rem;
    }

    a {
        border: none;
        font-weight: 500;
        padding-inline: 1rem;
        border-left: 2px solid var(--surface1);
        color: var(--text2);
        justify-content: space-between;
        align-items: center;

        &:hover,
        &:focus-visible {
            color: var(--text1);
        }

        &.active {
            border-color: var(--accent);
            color: var(--accent);
        }
    }
</style>
