<script>
    import EntryItemDetails from "./EntryItemDetails.svelte";
    import { graphql, fragment } from "$houdini";
    
    export let entry;

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
                }
                __typename
            }
        `),
    );

    entry = {...entry, ...$data}
</script>

<EntryItemDetails {entry} />