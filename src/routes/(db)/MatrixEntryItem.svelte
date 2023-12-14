<script>
    import EntryItem from "./EntryItem.svelte";
    import { graphql, fragment } from "$houdini";

    export let entry;

    const data = fragment(
        entry,
        graphql(`
            fragment matrixEntry on Matrice {
                rarity
                name
                assets {
                    iconLarge
                }
                banners {
                    bannerNumber
                }
            }
        `),
    );

    entry = { ...entry, ...$data };
</script>

<EntryItem {entry} />
