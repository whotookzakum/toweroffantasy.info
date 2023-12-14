<script>
    // This component splits logic by __typename so that the proper fragment can be included in the query for the proper type
    import WeaponEntryItem from "./WeaponEntryItem.svelte"
    import SimulacraV2EntryItem from "./SimulacraV2EntryItem.svelte";

    export let entry;

    const components = {
        Weapon: WeaponEntryItem,
        SimulacraV2: SimulacraV2EntryItem
    }
</script>

<svelte:component this={components[entry.__typename]} {entry} />