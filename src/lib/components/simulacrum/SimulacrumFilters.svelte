<script>
    import CategoryIcon from "$lib/components/simulacrum/CategoryIcon.svelte";
    export let showWeaponIcon;
</script>

<div>
    <input
        type="checkbox"
        name="imageToggle"
        id="show-weapon-toggle"
        bind:checked={showWeaponIcon}
    />
    <label for="show-weapon-toggle">Display Weapon</label>
</div>

<div class="filters">
    <section>
        <CategoryIcon type={"dps"} width={30} />
        <CategoryIcon type={"defense"} width={30} />
        <CategoryIcon type={"support"} width={30} />
    </section>

    <section>
        <CategoryIcon type={"flame"} width={30} />
        <CategoryIcon type={"volt"} width={30} />
        <CategoryIcon type={"ice"} width={30} />
        <CategoryIcon type={"physical"} width={30} />
        <CategoryIcon type={"altered"} width={30} />
    </section>
</div>