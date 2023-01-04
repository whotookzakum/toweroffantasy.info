<script>
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";

    const links = [
        {
            text: "Simulacra",
            href: "/simulacra",
        },
        {
            text: "Matrices",
            href: "/matrices",
        },
        {
            text: "Relics",
            href: "/relics",
        },
        {
            text: "Exploration",
            href: "/exploration",
        },
        {
            text: "Food",
            href: "/food",
        },
        {
            text: "Mounts",
            href: "/mounts",
        },
        {
            text: "Cosmetics",
            href: "/cosmetics",
        },
        // {
        //     text: "Guides",
        //     href: "/guides",
        // },
        {
            text: "Interactive Map",
            href: "https://www.ghzs666.com/tower-of-fantasy-map#/",
        },
        {
            text: "Shop",
            href: "https://aida-cafe.shop/",
        },
    ];

    const socials = [
        {
            href: "https://discord.gg/aidacafe",
            icon: "bxl:discord-alt",
            label: "Aida Cafe Discord",
        },
        {
            href: "https://www.reddit.com/r/TowerofFantasy/",
            icon: "ph:reddit-logo-fill",
            label: "Tower of Fantasy Reddit",
        },
        {
            href: "https://twitter.com/_Aida_Cafe",
            icon: "bxl:twitter",
            label: "Aida Cafe Twitter",
        },
    ];
</script>

<nav class="nav-closed" id="nav-uid">
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
                    >{link.text}</a
                >
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
        <a href="">Cookies</a>
        <a href="/privacy">Privacy</a>
    </footer>
</nav>

<style lang="scss">
    nav {
        background: var(--surface1);
        // box-shadow: 0 0 4px 2px var(--surface-shadow);
        width: 250px;
        height: 100vh;
        overflow-y: scroll;
        position: fixed;
        margin-left: 0;
        top: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        --padding: 0.75rem 1.5rem;

        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
        transition: all 0.3s ease;
    }

    @media (max-width: 800px) {
        nav.nav-open {
            margin-left: 0;
        }

        nav.nav-closed {  
            margin-left: -250px;
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
