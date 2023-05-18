<script>
    import MenuItem from "../MenuItem.svelte";
    import Menu from "../Menu.svelte";

    export let weapon;
</script>

<h3>Recommended Matrices</h3>
<small>Strongest recommendations come first</small>
<Menu>
    {#each weapon.recommendedMatrices as matrix}
        <MenuItem
            href={`/matrices/${matrix.name.toLowerCase().replace(" ", "-")}`}
        >
            <img
                src={`/images/Icon/yizhi/256/${matrix.imgSrc}.webp`}
                alt=""
                width="128"
                height="128"
                loading="lazy"
            />
            <span class="menu-item-name">
                {matrix.name} <i class="absolute">x{matrix.pieces}</i>
            </span>
        </MenuItem>
    {/each}
</Menu>

<style lang="scss">
    img {
        width: 110%;
        margin: -1rem;
        height: auto;
    }

    i {
        text-transform: uppercase;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        line-height: 1;
        font-style: normal;
        font-weight: 700;
        // text-shadow: 0 1px 3px black;
        font-size: var(--step-1);
        color: white;
        background: hsla(220, 15%, 10%, 1);
        padding: 0.5rem;
        box-shadow: 0 1px 1px var(--surface-shadow);
    }
</style>
