<script>
    import Menu from "$lib/components/Menu.svelte";
    import MenuItem from "$lib/components/MenuItem.svelte";

    export let data;
    const mounts = data.items;
</script>

<h1>Mounts</h1>
<p>
    All mounts move at the same speed. Multiple mounts can unlock achievements,
    and maintaining mounts will reward you with dark crystals. Some mounts have
    different colors available at certain levels.
</p>

<Menu>
    {#each mounts as mount}
        <MenuItem href={mount.path}>
            {#if mount.chinaOnly}
                <abbr class="absolute" title="China Exclusive" />
            {/if}
            <img
                src={`/images/UI/Mount/${mount.imgSrc}.png`}
                alt={mount.name}
                width="308"
                height="206"
            />
            <span>{mount.name}</span>
        </MenuItem>
    {/each}
</Menu>

<style lang="scss">
    img {
        // margin-top: 1rem;
        width: 140%;
        height: auto;
    }
</style>
