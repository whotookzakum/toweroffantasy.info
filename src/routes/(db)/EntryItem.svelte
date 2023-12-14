<script>
    // This component splits logic by __typename so that the proper fragment can be included in the query for the proper type
    import WeaponEntryItem from "./WeaponEntryItem.svelte"

    export let entry;

    const components = {
        Weapon: WeaponEntryItem
    }
</script>

<svelte:component this={components[entry.__typename]} {entry} />