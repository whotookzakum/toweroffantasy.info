<script>
    import { graphql } from "$houdini";
    import MatrixEntryItem from "./MatrixEntryItem.svelte";

    export let id;
    export let isNew;

    export const _MatrixQueryVariables = () => {
        return { id };
    };

    const store = graphql(`
        query MatrixQuery($id: String) @load {
            matrix(id: $id) @load {
                ...matrixEntry
                __typename
            }
        }
    `);
</script>

{#if !$store.fetching}
    <MatrixEntryItem entry={$store.data.matrix} {isNew} />
{/if}
