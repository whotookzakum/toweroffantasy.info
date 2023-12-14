<script>
    import EntryItem from "../../EntryItem.svelte";
    import { graphql } from "$houdini";

    // Alternative methods for chaining queries: https://houdinigraphql.com/api/query#loading-states

    export let id, type;

    export const _EntryQueryVariables = () => {
        return { id };
    };

    const store = graphql(`
        query EntryQuery($id: String) @load {
            simulacrum_v2(id: $id) {
                ...simulacrum_v2Entry
            }
        }
    `);

    $: entry = !$store.fetching && $store.data[type];
    $: console.log(entry)
</script>

{#if !$store.fetching}
    <EntryItem {entry} />
{/if}
