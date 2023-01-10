<svelte:options immutable={true} />

<script context="module">
    import { writable } from "svelte/store";

    export const open = writable(false);
</script>

<script>
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import { afterNavigate } from "$app/navigation";
    import NAVIGATION_LINKS from "$lib/data/navigation.json";

    let mounted;

    const { links, socials } = NAVIGATION_LINKS;

    onMount(() => {
        mounted = true;
    });

    afterNavigate(({ to }) => {
        $open = Boolean(to.url.hash === "#main-menu");
    });

    function toggleNav() {
        if (window.location.hash === "#main-menu") {
            window.location.hash = "";
            $open = false;
        } else {
            $open = !$open;
        }
    }
</script>

<nav aria-label="Main menu">
    {#if mounted}
        <button
            aria-controls="main-menu"
            aria-expanded={$open}
            class="nav-toggle"
            type="button"
            on:click={toggleNav}
        >
            <Icon
                icon={$open ? "ph:x" : "mdi:menu"}
                width="32"
                height="32"
                color="var(--accent)"
            />
        </button>
    {:else}
        <a class="nav-toggle" href="#main-menu">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
            >
                <path
                    fill="currentColor"
                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
            </svg>
        </a>
    {/if}
    <div id="main-menu" class="nav-body">
        <a class="home-link" href="/">
            <img
                src="/images/mia.png"
                style="padding: 0.5rem"
                alt="Logo"
                width="128"
                height="128"
            />
            Tower of Fantasy Index
        </a>
        <hr />
        <div class="links">
            {#each links as link}
                {#if link.href.includes("https")}
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        {link.text}
                        <Icon icon="mdi:external-link" width="16" height="16" />
                    </a>
                {:else}
                    <a
                        href={link.href}
                        class:active={$page.url.pathname.includes(link.href)}
                    >
                        {link.text}
                    </a>
                {/if}
            {/each}
        </div>
        <div class="socials">
            {#each socials as link}
                <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label={link.label}
                    ><Icon icon={link.icon} width="28" height="28" /></a
                >
            {/each}
        </div>
        <footer>
            <a a class="nn-cmp-show" href="#">Cookies</a>
            <a href="/privacy">Privacy</a>
        </footer>
    </div>
</nav>

<style lang="scss">
    nav {
        display: contents;
    }

    .nav-body {
        background: var(--surface1);
        width: var(--nav-width);
        height: 100vh;
        overflow-y: auto;
        position: fixed;
        top: 0;
        z-index: 9000;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        transform: translateX(calc(-1 * var(--nav-width)));
        will-change: transform;
        --padding: 0.75rem 1.5rem;
    }

    .nav-body * {
        opacity: 0;
    }

    [aria-expanded="true"] + .nav-body,
    #main-menu:target {
        transform: none;
    }

    [aria-expanded="true"] + .nav-body *,
    #main-menu:target * {
        opacity: 1;
    }

    .nav-toggle {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 9001;
        background: var(--surface3);
        box-shadow: 0 2px 4px var(--surface-shadow);
        border: 1px solid;
        color: var(--accent);
        padding: 0.3rem;
        box-sizing: border-box;
        width: 44px;
        height: 44px;
    }

    // content-width
    @media (min-width: 800px) {
        .nav-toggle {
            display: none;
        }

        .nav-body {
            position: sticky;
            transform: none;
        }

        .nav-body * {
            opacity: 1;
        }
    }

    .home-link {
        padding: var(--padding);
        display: grid;
        place-items: center;
    }

    hr {
        border-top: none;
        border-color: var(--accent);
        border-color: transparent;
        margin: 0.5em 3rem;
    }

    a {
        border: none;
    }

    .links a {
        position: relative;
        overflow: hidden;
        padding: var(--padding);
        display: block;
        transition: all 125ms ease;
        color: var(--text2);

        &.active {
            color: var(--accent) !important;
            font-weight: bold;
            border-left: 3px solid var(--accent);
        }

        &:hover,
        &:focus,
        &.active {
            background-color: var(--surface3);
            padding-left: 2rem;
            color: var(--text1);
        }
    }

    .socials {
        color: var(--accent);
        display: flex;
        gap: 0.75rem;
        padding: var(--padding);
    }

    footer {
        padding: 1.5rem;
        margin-top: auto;
        font-size: var(--step--2);
        color: var(--text2);
        display: grid;
        gap: 0.35rem;

        a {
            width: fit-content;
        }
    }

    // Loading animation
    // .links a::before {
    //     background-color: rgba(255, 255, 255, 0.02);
    //     content: "";
    //     position: absolute;
    //     z-index: 0;
    //     top: 0;
    //     bottom: 0;
    //     left: 0;
    //     right: 0;
    //     transform: translateX(-100%);
    // }

    // .links a:active::before {
    //     transform: translateX(0);
    //     transition: transform 0.75s ease-in-out;
    // }
</style>
