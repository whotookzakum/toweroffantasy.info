<script>
    import EntryItem from "./EntryItem.svelte";
    import { graphql, fragment } from "$houdini";

    export let entry;

    const data = fragment(
        entry,
        graphql(`
            fragment simulacrum_v2Entry on SimulacraV2 {
                name
                rarity
                id
                banners {
                    bannerNumber
                }
                assetsA0 {
                    painting
                    avatar
                }
                weapon {
                    rarity
                    element
                    category
                    charge {
                        tier
                        value
                    }
                    shatter {
                        tier
                        value
                    }
                }
            }
        `),
    );

    entry = { ...entry, ...$data };
</script>

<EntryItem {entry} />
