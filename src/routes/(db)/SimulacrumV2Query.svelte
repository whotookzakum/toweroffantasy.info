<script>
    import { graphql } from "$houdini";
    import SimulacrumV2EntryItem from "./SimulacrumV2EntryItem.svelte";

    export let id;

    export const _SimulacrumV2QueryVariables = () => {
        return { id };
    };

    const store = graphql(`
        query SimulacrumV2Query($id: String) @load {
            simulacrum_v2(id: $id) @load {
                ...simulacrum_v2Entry
                __typename
            }
        }
    `);
</script>

{#if !$store.fetching}
    <SimulacrumV2EntryItem entry={$store.data.simulacrum_v2} />
{/if}
