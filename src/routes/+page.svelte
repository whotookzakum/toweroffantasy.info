<script>
    import Meta from "./(db)/Meta.svelte";
    import EntryItem from "./(db)/EntryItem.svelte";
    import BackgroundImage from "$lib/components/BackgroundImage.svelte";

    export let data;
</script>

<Meta
    title="Home | Tower of Fantasy Index"
    description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!"
/>

<ul class="entry-list">
    <EntryItem entry={data.newest.simulacrum} isNew />
    <EntryItem entry={data.newest.weapon} isNew />
    <EntryItem entry={data.newest.matrix} isNew />
</ul>

