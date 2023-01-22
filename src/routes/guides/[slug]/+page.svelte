<script>
    import SectionNavigation from "$lib/components/SectionNavigation.svelte";
    export let data;
</script>

<SectionNavigation />

<article>
    <h1>{data.title}</h1>
    <p>Last updated: {data.date}</p>
    <svelte:component this={data.content} />
</article>
