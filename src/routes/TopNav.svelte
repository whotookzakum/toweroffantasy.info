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
        </div>
        <!-- <img src="/images/Icon/Avatar/Avatar43_s.webp" alt="" width="64" height="64"> -->

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
        z-index: 10;
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
