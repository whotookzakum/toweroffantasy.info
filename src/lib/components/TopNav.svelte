<script>
    import links from "./links.json";
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    import RegionSelector from "$components/RegionSelector.svelte";
    import { browser } from "$app/environment";

    // TODO: Site Settings Modal

    let open = false;
    let collapserOpen = false;

    if (browser) {
        document.addEventListener("keyup", (e) => {
            if (e.code === "Escape" && open) open = false;
        });
    }

    if (browser) {
        const imgNodes = document.querySelectorAll("img");
        // console.log(imgNodes);
        imgNodes.forEach((img) => {
            let localFilePath = "/Hotta/Content/Resources";
            if (
                img.src.includes("L10N") ||
                img.src.includes("ResourcesOverSea")
            ) {
                localFilePath = "/Hotta/Content";
            }
            img.src = img.src.replace(
                "https://raw.githubusercontent.com/FortOfFans/ToF.github.io/webp",
                localFilePath,
            );
        });
    }
</script>

<nav class="topnav grid">
    <div class="nav-content grid" class:open>
        <div class="top-strip flex">
            <a href="/" class="nav-link nav-home">
                <span class="long">Tower of Fantasy</span>
                <span class="mini">ToF</span> Index
            </a>
            <!-- <RegionSelector style="margin: 0.5rem 0.25rem" /> -->
        </div>

        <input
            type="checkbox"
            id="navToggler"
            class="visually-hidden style-next-label"
            bind:checked={open}
        />
        <label for="navToggler" class="toggler-label grid">
            <span class="open-icon flex">
                <Icon icon="ic:baseline-menu" width="24" />
            </span>
            <span class="open-icon visually-hidden">Open Navigation</span>
            <span class="close-icon flex">
                <Icon icon="ic:baseline-close" width="24" />
            </span>
            <span class="close-icon visually-hidden">Close Navigation</span>
        </label>

        <div class="links-strip flex g-25">
            {#each links.filter((link) => !(link.external || link.collapse)) as { href, name }}
                <a
                    {href}
                    class:active={$page.url.pathname.includes(href)}
                    class="nav-link"
                    on:click={() => (open = false)}
                >
                    {name}
                </a>
            {/each}

            <div class="collapse-section-wrapper">
                <input
                    type="checkbox"
                    id="collapse-toggler"
                    class="visually-hidden"
                    bind:checked={collapserOpen}
                    
                    on:blur={(e) => {
                        console.log(e.relatedTarget)
                        console.log(e)
                        console.log(document.querySelector(":focus"))

                        const blur = e.relatedTarget
                            ? true
                            : !e.explicitOriginalTarget?.id?.includes(
                                  "collapse-toggler",
                              );

                        if (collapserOpen && blur) collapserOpen = false;
                        else e.preventDefault();
                    }}
                />
                <label
                    id="collapse-toggler-label"
                    for="collapse-toggler"
                    class:active={links.some(
                        (link) =>
                            $page.url.pathname.includes(link.href) &&
                            link.collapse,
                    )}
                >
                    <span class="visually-hidden">Show more links</span>
                    <Icon
                        icon="tabler:dots"
                        width="1.5rem"
                        style="pointer-events: none"
                    />
                </label>
                <div class="collapsed-links grid g-100 box">
                    {#each links.filter((link) => link.collapse) as { href, name }}
                        <a
                            {href}
                            class:active={$page.url.pathname.includes(href)}
                            class="nav-link"
                            on:click={() => {
                                open = false;
                                collapserOpen = false;
                            }}
                        >
                            {name}
                        </a>
                    {/each}
                </div>
            </div>

            {#each links.filter((link) => link.external) as { href, name }}
                <a
                    {href}
                    class:active={$page.url.pathname.includes(href)}
                    class="nav-link external"
                    on:click={() => (open = false)}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                >
                    {name}
                    <Icon icon="ei:external-link" width="18" />
                </a>
            {/each}
        </div>

        <div class="sns-links flex">
            <a
                href="https://discord.gg/aidacafe"
                target="_blank"
                rel="noreferrer noopener nofollow"
                class="flex box"
            >
                <Icon icon="logos:discord-icon" width="18" />
                <span class="visually-hidden">Discord</span>
            </a>
            <a
                href="https://www.reddit.com/r/TowerofFantasy/"
                target="_blank"
                rel="noreferrer noopener nofollow"
                class="flex box"
            >
                <Icon icon="logos:reddit-icon" width="18" />
                <span class="visually-hidden">Reddit</span>
            </a>
            <a
                href="https://twitter.com/_Aida_Cafe"
                target="_blank"
                rel="noreferrer noopener nofollow"
                class="flex box"
            >
                <Icon icon="logos:twitter" width="18" />
                <span class="visually-hidden">Twitter</span>
            </a>
            <!-- <button class="flex box">
                <Icon icon="mdi:gear" width="18" />
                <span class="visually-hidden">Site Settings</span>
            </button> -->
        </div>
    </div>
</nav>
<div class="backdrop" aria-hidden="true" on:click={() => (open = false)} />

<style lang="scss">
    nav {
        background: var(--bg);
        border-bottom: 1px solid var(--surface1);
        grid-column: 1/-1;
        position: sticky;
        top: 0;
        z-index: 20;
    }

    .nav-content {
        max-width: 1192px;
        margin: auto;
        padding: 0.5rem;
        grid-column: 2/3;
        width: 100%;
        grid-template-columns: auto auto;
    }

    .nav-home {
        .mini {
            display: none;
        }

        .long {
            display: inline;
        }
    }

    .bottom-strip {
        justify-content: space-between;
    }

    .toggler-label {
        width: 36px;
        height: 36px;
        place-content: center;
        justify-self: end;
        cursor: pointer;
        border-radius: 0.5rem;
        display: none;
    }

    #navToggler:focus-visible + .toggler-label,
    .toggler-label:hover {
        background: var(--surface1);
    }

    .close-icon {
        display: none;
        color: var(--accent);
    }

    #navToggler:checked + .toggler-label {
        .open-icon {
            display: none;
        }
        .close-icon {
            display: flex;
        }
    }

    .sns-links {
        align-items: start;
        align-self: center;
        justify-self: end;
        grid-row: 1;
        grid-column: 2;

        & > * {
            place-content: center;
            padding: 0.5rem;
            aspect-ratio: 1/1;
            align-items: center;
            background: hsla(226, 40%, 15%, 0.5);
            background: none;
            border: none;
            border-radius: 5px;
            border-radius: 50%;
            // border: 1px solid var(--surface1);
            min-height: 36px;
        }

        & > *:where(:hover, :focus-visible) {
            background: var(--surface1);
            border-color: var(--surface2);
        }
    }

    @mixin nav-link {
        border: none;
        padding: 0.5rem;
        gap: 0.25rem;
        font-weight: 500;
        font-size: var(--step--2);

        &:not(.nav-home).active {
            color: var(--accent);
        }

        &.external {
            color: var(--tier-a);
            display: flex;
        }
    }

    .nav-link {
        @include nav-link;
    }

    .nav-home {
        font-size: var(--step-1);
        font-weight: 600;
        border: none;
    }

    .links-strip {
        align-items: end;
        grid-column: 1/-1;
    }

    .collapse-section-wrapper {
        position: relative;
        margin-right: auto;

        &:where(:hover) {
            .collapsed-links {
                opacity: 1;
                visibility: visible;
                transform: unset;
            }

            #collapse-toggler-label {
                background: var(--surface1);
                color: var(--accent);
            }
        }

        #collapse-toggler:focus-visible ~ .collapsed-links,
        #collapse-toggler:checked ~ .collapsed-links,
        .collapsed-links:focus-within {
            opacity: 1;
            visibility: visible;
            transform: unset;
        }
    }

    #collapse-toggler:focus-visible + label {
        outline: 2px solid var(--accent);
        background: var(--surface1);
    }

    #collapse-toggler:checked + label {
        background: var(--surface2) !important;
    }

    #collapse-toggler-label {
        align-self: center;
        min-height: 33px;
        aspect-ratio: 1/1;
        display: grid;
        place-content: center;
        border-radius: 0.5rem;
        cursor: pointer;

        &.active {
            color: var(--accent);
        }
    }

    .collapsed-links {
        position: absolute;
        z-index: 1;
        right: 0;
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s ease;
        transform: translateY(4px);
        border: 1px solid var(--surface2);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);

        a {
            white-space: nowrap;
            padding: 0;
        }
    }

    @media (min-width: 860px) {
        #navToggler {
            display: none;
        }
    }

    @media (max-width: 860px) {
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000000;
        }

        .nav-home {
            font-size: var(--step--1);
            align-self: center;

            .mini {
                display: inline;
            }

            .long {
                display: none;
            }
        }

        .toggler-label {
            display: grid;
        }

        .nav-content {
            grid-template-columns: auto auto;
            grid-template-rows: 36px 0fr;
            transition: all 0.3s ease;
            overflow: hidden;
            position: relative;
            z-index: 10;
        }

        .nav-content:not(.open) {
            .links-strip > *,
            .sns-links > * {
                visibility: hidden;
                opacity: 0;
            }
        }

        .nav-content.open {
            grid-template-rows: 36px 1fr;

            .sns-links {
                grid-row: -1;
                & > * {
                    transition-duration: 1s;
                }
            }
        }

        .links-strip *:first-child {
            margin-top: 0.5rem;
        }

        .links-strip,
        .sns-links {
            overflow: hidden;
            grid-column: 1/-1;

            & > * {
                transition: opacity 0.3s ease;
                opacity: 1;
                visibility: visible;
            }
        }

        .links-strip {
            grid-row: -2;
            align-self: start;
            display: grid;
        }

        .sns-links {
            grid-row: -2;
            grid-column: 1;
            justify-self: unset;
            z-index: -1;

            & > * {
                transition-duration: 0s;
            }
        }

        #collapse-toggler,
        #collapse-toggler-label {
            display: none;
        }

        .collapsed-links {
            transform: unset;
            transition: unset;
            visibility: unset;
            opacity: unset;
            position: unset;
            box-shadow: unset;
            padding: unset;
            background: unset;
            border: unset;
            grid-column: 1;
            gap: 0.25rem;

            a {
                @include nav-link;
                margin-top: 0 !important;
            }
        }

        .backdrop {
            opacity: 0;
            transition: all 0.3s ease;
        }

        nav:has(.open) + .backdrop {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            z-index: 18;
            opacity: 1;
        }
    }
</style>
