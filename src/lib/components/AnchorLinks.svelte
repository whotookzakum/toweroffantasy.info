<script>
    import { page } from "$app/stores";
    import Ad from "$components/Ad/Ad.svelte";
    import Tag from "./Tag.svelte";
    export let simulacrum_v2, weapon, matrix;

    // TODO: add .active class toggling for section links

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
                name: "Top",
                href: "#top",
            },
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
                name: "Stats",
                href: "#stats",
            },
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
                name: "Upgrade Materials",
                href: "#upgrade-materials",
            },
            {
                name: "Meta",
                href: "#meta",
                disabled:
                    !weapon.meta.analyticVideoId &&
                    weapon.meta.recommendedMatrices.length === 0 &&
                    weapon.meta.recommendedPairings.length === 0 &&
                    weapon.meta.rating.length === 0,
            },
            {
                name: "Banners",
                href: "#banners",
                disabled: weapon.banners.length < 1,
            },
        );
    } else if ($page.url.pathname.includes("/matrices")) {
        anchorLinks.push(
            {
                name: "Top",
                href: "#top",
            },
            {
                name: "Set Effects",
                href: "#effects",
            },
            {
                name: "Meta",
                href: "#meta",
                disabled: matrix.meta.recommendedWeapons.length === 0,
            },
            {
                name: "Banners",
                href: "#banners",
                disabled: matrix.banners.length < 1,
            },
        );
    }
</script>

<div class="anchor-links-wrapper grid g-100">
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
    <p class="section-title">Jump to section</p>
    <nav class="section-links grid">
        {#each anchorLinks as link}
            {#if !link.disabled}
                <!-- Can be used to debug, but does not update when scrolling through the page -->
                <!-- class:active={$page.url.hash === link.href} -->
                <a href={link.href}>{link.name}</a>
            {/if}
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

    @media (max-width: 800px) {
        .anchor-links-wrapper > *:not(.section-links) {
            display: none;
        }

        .section-links {
            display: flex;
            width: 100%;
            overflow-x: scroll;
            margin: 0;
            gap: 0.25rem;
            // -ms-overflow-style: none;
            // scrollbar-width: none;

            // &::-webkit-scrollbar {
            //     display: none;
            // }
        }

        a {
            border: none;
            padding: 0.35rem 0.5rem;
            border-radius: 0.5rem;
            line-height: normal;
            white-space: nowrap;
        }

        a:hover,
        a:focus-visible {
            background: var(--surface2);
        }

        a.active {
            background: var(--surface2);
            color: var(--accent);
        }
    }
</style>
