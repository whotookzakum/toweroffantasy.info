<script>
    import links from "./links.json";
    import Icon from "@iconify/svelte";
    import { page } from "$app/stores";
    import RegionSelector from "./(db)/RegionSelector.svelte";
    import Link from "./Link.svelte";

    const homeHref = $page.url.pathname.includes("/cn") ? "/cn" : "/"
</script>

<nav>
    <div class="nav-content grid">
        <div class="top-strip flex g-25">
            <div class="flex" style="align-items: end">
                <Link href="/" classes="nav-link nav-home">
                    Tower of Fantasy Index
                </Link>
                <!-- <a href={homeHref} class="link-home flex g-50">
                    
                </a> -->
                <RegionSelector style="margin: 0.5rem 0.25rem" />
            </div>
            
        </div>

        <div class="links-strip flex g-25">
            {#each links as { href, name, icon }}
                <Link {href} classes="nav-link">
                    {name}
                </Link>
            {/each}
            <div class="sns-links flex g-25">
                <a href="https://discord.gg/aidacafe" class="flex box">
                    <Icon icon="logos:discord-icon" width="18" />
                    <span class="visually-hidden">Discord</span>
                </a>
                <a
                    href="https://www.reddit.com/r/TowerofFantasy/"
                    class="flex box"
                >
                    <Icon icon="logos:reddit-icon" width="18" />
                    <span class="visually-hidden">Reddit</span>
                </a>
                <a href="https://twitter.com/_Aida_Cafe" class="flex box">
                    <Icon icon="logos:twitter" width="18" />
                    <span class="visually-hidden">Twitter</span>
                </a>
            </div>
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
        align-items: end;
    }
</style>
