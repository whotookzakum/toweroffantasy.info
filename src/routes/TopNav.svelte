<script>
    import links from "./links.json";
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
</script>

<nav>
    <div class="nav-content grid g-50">
        <div class="top-strip flex g-25">
            <a href="/" class="link-home flex g-50">
                <img src="/images/mia.webp" alt="" width="48" height="48" />
                <span>Tower of Fantasy Index</span>
            </a>
            <div class="sns-links flex g-25">
                <a href="https://discord.gg/aidacafe" class="flex box">
                    <Icon icon="logos:discord-icon" width="18" />
                    <span class="visually-hidden">Discord</span>
                </a>
                <a href="https://www.reddit.com/r/TowerofFantasy/" class="flex box">
                    <Icon icon="logos:reddit-icon" width="18" />
                    <span class="visually-hidden">Reddit</span>
                </a>
                <a href="https://twitter.com/_Aida_Cafe" class="flex box">
                    <Icon icon="logos:twitter" width="18" />
                    <span class="visually-hidden">Twitter</span>
                </a>
            </div>
        </div>

        <div class="links-strip flex g-25">
            {#each links as { href, name, icon }}
                <a {href} class:active={$page.url.pathname.includes(href)}>
                    <!-- <Icon {icon} /> -->
                    {name}
                </a>
            {/each}
            <a
                href="/banners"
                class:active={$page.url.pathname.includes("/banners")}
                style="margin-left: auto"
            >
                📆 Banners
            </a>
        </div>
    </div>
</nav>

<style lang="scss">
    nav {
        background: var(--bg);
        border-bottom: 1px solid var(--surface1);
        grid-column: 1/-1;
        padding: 0.5rem;
        position: sticky;
        top: 0;
        z-index: 20;
    }

    .nav-content {
        max-width: 1160px;
        margin: auto;
    }

    a {
        border: none;
    }

    .link-home {
        font-size: var(--step-1);
        font-weight: bold;
        align-items: end;

        span {
            margin-bottom: 0.5rem;
        }
    }

    .sns-links {
        margin-left: auto; 
        align-items: start;

        a {
            padding: 0.5rem;
            aspect-ratio: 1/1;
            align-items: center;
            background: hsla(226, 40%, 15%, 0.5);
            border-radius: 5px;
            border: 1px solid var(--surface1);
        }

        a:where(:hover, :focus-visible) {
            background: var(--surface1);
            border-color: var(--surface2);
        }
    }

    .links-strip {
        a {
            padding: 0.5rem;
            gap: 0.25rem;
        }

        a:where(:hover, :focus-visible) {
            background: var(--surface1);
            border-radius: 0.5rem;
        }

        .active {
            color: var(--accent);
        }
    }
</style>
