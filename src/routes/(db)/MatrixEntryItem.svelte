<script>
    import EntryItem from "./EntryItem.svelte";
    import { graphql, fragment } from "$houdini";

    export let entry;
    export let isNew;

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
                    isFinalBanner
                }
            }
        `),
    );

    entry = { ...entry, ...$data };
</script>

<EntryItem {entry} {isNew} />
