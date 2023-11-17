<script>
    import { page } from "$app/stores";

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

<nav>
    {#each links as link}
        <a
            class:active={$page.url.pathname.includes(link.href)}
            href={link.href}>{link.name}</a
        >
    {/each}
</nav>

<style lang="scss">
    nav {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        font-size: var(--step--1);
        
    }

    a {
        border: none;
        background: var(--surface1);
        padding: 0.5rem;
        border-radius: 0.5rem;
        color: var(--text2);

        &.active {
            color: var(--accent);
            background: var(--surface2);
        }

        &:hover,
        &:focus {
            color: var(--text1);
        }
    }
</style>
