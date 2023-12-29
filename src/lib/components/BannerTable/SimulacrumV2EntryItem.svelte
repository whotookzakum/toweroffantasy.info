<script>
    import EntryItem from "$components/EntryItem/EntryItem.svelte";
    import { graphql, fragment } from "$houdini";

    export let entry;
    export let isNew;

    const data = fragment(
        entry,
        graphql(`
            fragment simulacrum_v2Entry2 on SimulacraV2 {
                name
                rarity
                id
                banners {
                    bannerNumber
                    isFinalBanner
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

<EntryItem {entry} {isNew} />