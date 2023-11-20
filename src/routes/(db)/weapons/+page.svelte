<script>
    import Meta from "../Meta.svelte";
    import EntryItem from "../EntryItem.svelte";

    export let data;
    $: ({ AllWeapons } = data);
    $: ({ weapons } = $AllWeapons.data);
</script>

<Meta
    title="Weapons | Tower of Fantasy Index"
    description=""
    image="https://api.toweroffantasy.info{weapons[0].assets.avatar}"
/>

{#each weapons as entry}
    <EntryItem {entry} />
{/each}
