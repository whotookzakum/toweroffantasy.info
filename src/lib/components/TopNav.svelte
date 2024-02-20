<script>
    import links from "./links.json";
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    import RegionSelector from "$components/RegionSelector.svelte";
    import { showWepOnSimEntry } from "$lib/stores";
    import { browser } from "$app/environment"

    // TODO: Site Settings Modal
    // TODO: Region Selector

    let open = false;

    if (browser) {
        document.addEventListener("keyup", (e) => {
            if (e.code === "Escape" && open) open = false
        })
    }
</script>

<nav>
    <div class="nav-content grid" class:open>
        <div class="top-strip flex">
            <a href="/" class="nav-link nav-home"> Tower of Fantasy Index </a>
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

        <div class="bottom-strip flex g-50">
            <!-- <label class="top-right">
                <input type="checkbox" bind:checked={$showWepOnSimEntry} /> Show weapon
                details on Simulacrum cards
            </label> -->

            <div class="links-strip flex g-25">
                {#each links as { href, name, icon }}
                    <a
                        {href}
                        class:active={$page.url.pathname.includes(href)}
                        class="nav-link"
                        on:click={() => open = false}
                    >
                        {name}
                    </a>
                {/each}
            </div>

            <div class="sns-links flex g-25">
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
    </div>
</nav>
<div class="backdrop" aria-hidden="true" on:click={() => open = false} />

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

        & > * {
            padding: 0.5rem;
            aspect-ratio: 1/1;
            align-items: center;
            background: hsla(226, 40%, 15%, 0.5);
            border-radius: 5px;
            border: 1px solid var(--surface1);
        }

        & > *:where(:hover, :focus-visible) {
            background: var(--surface1);
            border-color: var(--surface2);
        }
    }

    .nav-link {
        border: none;
        padding: 0.5rem;
        gap: 0.25rem;
        font-weight: 500;
        font-size: var(--step--2);

        &:not(.nav-home).active {
            color: var(--accent);
        }
    }

    .nav-home {
        font-size: var(--step-1);
        font-weight: 600;
        border: none;
    }

    .links-strip {
        align-items: end;
    }

    @media (max-width: 860px) {
        nav {
            position: fixed;
            top: 0;
            width: 100%;
        }

        .nav-home {
            font-size: var(--step--1);
        }

        .toggler-label {
            display: grid;
        }

        .links-strip {
            display: grid;
            justify-content: start;
            margin-top: 0.5rem;
        }

        .nav-content {
            grid-template-columns: auto auto;
            grid-template-rows: 36px 0fr;
            transition: all 0.3s ease;
            overflow: hidden;
            position: relative;
            z-index: 10;
        }

        .nav-content.open {
            grid-template-rows: 36px 1fr;
        }

        .nav-content:not(.open) .bottom-strip > * {
            visibility: hidden;
            opacity: 0;
        }

        .bottom-strip {
            overflow: hidden;
            grid-column: 1/-1;
            align-self: start;
            display: grid;

            & > * {
                transition: all 0.3s ease;
                opacity: 1;
                visibility: visible;
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
