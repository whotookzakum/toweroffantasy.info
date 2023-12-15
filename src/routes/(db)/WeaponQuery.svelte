<script>
    import { graphql } from "$houdini";
    import WeaponEntryItem from "./WeaponEntryItem.svelte";

    export let id;
    export let isNew;

    export const _WeaponQueryVariables = () => {
        return { id };
    };

    const store = graphql(`
        query WeaponQuery($id: String) @load {
            weapon(id: $id) @load {
                ...weaponEntry
                __typename
            }
        }
    `);
</script>

{#if !$store.fetching}
    <WeaponEntryItem entry={$store.data.weapon} {isNew} />
{/if}
