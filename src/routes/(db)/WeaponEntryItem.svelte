<script>
    import EntryItem from "./EntryItem.svelte";
    import { graphql, fragment } from "$houdini";
    
    export let entry;
    export let isNew;

    const data = fragment(
        entry,
        graphql(`
            fragment weaponEntry on Weapon {
                rarity
                name
                id
                assets {
                    icon
                }
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
                banners {
                    bannerNumber
                    isFinalBanner
                }
            }
        `),
    );

    entry = {...entry, ...$data}
</script>

<EntryItem {entry} {isNew} />